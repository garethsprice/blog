require 'open3'

# Some code is from https://github.com/gjtorikian/jekyll-last-modified-at

module Jekyll
  module Revision

    class Generator < Jekyll::Generator
      def generate(site)
        return if ARGV.include?("--no-revision")

        items = site.posts.docs + site.pages + site.docs_to_write
        max_revisions = site.config['max_revisions_count'] || 5
        items.each do |item|
          logger = GitLogger.new(site.source, item.path, max_revisions)
          revisions = logger.revisions
          item.data['revisions'] = revisions
          item.data['revisions_max_count'] = max_revisions
          item.data['last_modified_at'] = revisions&.first&.dig('date')
        end
      end
    end # Revision

    class GitLogger
      attr_reader :site_source, :page_path, :max_count

      def initialize(site_source, page_path, max_count = 5)
        @site_source = site_source
        @page_path   = page_path
        @max_count   = max_count
      end

      def revisions
        return nil unless is_git_repo?
        logs = Executor.sh(
          'git', 'log',
          '--pretty=COMMIT|%h|%ci|%an|%s',
          '--numstat',
          '--follow',
          '--max-count=' + max_count.to_s,
          '--',
          relative_path_from_git_dir
        )
        parse_logs(logs)
      end

      def parse_logs(logs)
        return [] if logs.nil? || logs.empty?
        revisions = []
        current_revision = nil

        logs.lines.each do |line|
          line = line.strip
          next if line.empty?

          if line.start_with?('COMMIT|')
            revisions << current_revision if current_revision
            parts = line.sub('COMMIT|', '').split('|')
            current_revision = {
              "short_hash" => parts[0],
              "date" => parts[1],
              "author" => parts[2],
              "message" => parts[3..-1]&.join('|')&.strip,
              "insertions" => 0,
              "deletions" => 0
            }
          elsif current_revision
            # Parse numstat line (e.g., "10\t5\tfilename" or with renames "{old => new}")
            if line =~ /^(\d+|-)\t(\d+|-)\t/
              current_revision["insertions"] += ($1 == '-' ? 0 : $1.to_i)
              current_revision["deletions"] += ($2 == '-' ? 0 : $2.to_i)
            end
          end
        end

        revisions << current_revision if current_revision
        revisions
      end

      private

      def is_git_repo?
        @@is_git_repo ||= begin
          Dir.chdir(site_source) do
            Executor.sh("git", "rev-parse", "--is-inside-work-tree").eql? "true"
          end
        rescue
          false
        end
      end

      def absolute_path_to_article
        @article_file_path ||= Jekyll.sanitized_path(site_source, @page_path)
      end

      def relative_path_from_git_dir
        @relative_path_from_git_dir ||= Pathname.new(absolute_path_to_article)
          .relative_path_from(
            Pathname.new(File.dirname(top_level_git_directory))
          ).to_s
      end

      def top_level_git_directory
        @@top_level_git_directory ||= begin
          Dir.chdir(site_source) do
            top_level_git_directory = File.join(Executor.sh("git", "rev-parse", "--show-toplevel"), ".git")
          end
        rescue
          ""
        end
      end
    end # GitLogger
  
    module Executor
      def self.sh(*args)
        Open3.popen2e(*args) do |stdin, stdout_stderr, wait_thr|
          exit_status = wait_thr.value # wait for it...
          output = stdout_stderr.read
          output ? output.strip : nil
        end
      end
    end # Executor

  end # Revision  
end # Jekyll
