# blog
Personal blog

## Local development
Run with an empty baseurl so links match localhost:
```bash
bundle exec jekyll serve --baseurl ''
```

## GitHub Pages
Uses the default **Deploy from a branch** build. Ensure **Settings → Pages** has the correct branch and that `baseurl` in `_config.yml` matches your repo name (e.g. `/blog`).
