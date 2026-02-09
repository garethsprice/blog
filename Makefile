.PHONY: serve build clean install update

# Run Jekyll development server
serve:
	docker run --rm -v "$$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll:4 jekyll serve --watch --drafts

# Build the site for production
build:
	docker run --rm -v "$$PWD":/srv/jekyll -e JEKYLL_ENV=production jekyll/jekyll:4 jekyll build

# Remove generated files
clean:
	rm -rf _site .jekyll-cache .sass-cache

# Install/update dependencies
install:
	docker run --rm -v "$$PWD":/srv/jekyll -w /srv/jekyll ruby:3.2 bundle install

# Update dependencies
update:
	docker run --rm -v "$$PWD":/srv/jekyll -w /srv/jekyll ruby:3.2 bundle update
