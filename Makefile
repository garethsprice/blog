.PHONY: up serve build clean install update

DOCKER = docker run --rm -v "$$PWD":/srv/jekyll

# Run Jekyll development server (serves from root /)
up: serve
serve:
	$(DOCKER) -p 4000:4000 jekyll/jekyll:4 jekyll serve --watch --drafts --baseurl '/'

# Build the site for production (uses /blog from _config.yml)
build:
	$(DOCKER) -e JEKYLL_ENV=production jekyll/jekyll:4 jekyll build

# Remove generated files
clean:
	rm -rf _site .jekyll-cache .sass-cache

# Install/update dependencies
install:
	$(DOCKER) jekyll/jekyll:4 bundle install

# Update dependencies
update:
	$(DOCKER) jekyll/jekyll:4 bundle update
