.PHONY: serve build clean install update

JEKYLL = docker run --rm -v "$$PWD":/srv/jekyll jekyll/jekyll:4

# Run Jekyll development server
serve:
	$(JEKYLL) -p 4000:4000 jekyll serve --watch --drafts

# Build the site for production
build:
	docker run --rm -v "$$PWD":/srv/jekyll -e JEKYLL_ENV=production jekyll/jekyll:4 jekyll build

# Remove generated files
clean:
	rm -rf _site .jekyll-cache .sass-cache

# Install/update dependencies
install:
	$(JEKYLL) bundle install

# Update dependencies
update:
	$(JEKYLL) bundle update
