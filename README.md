# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install --save @docusaurus/plugin-ideal-image react-fast-marquee @tippyjs/react @react-spring/web classnames
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Issue tracking

Using `bugsink` locally (Sentry-SDK compatible)

```sh
docker pull bugsink/bugsink:latest

docker run \
  -e SECRET_KEY=jIWwTo2hJYaZO10Z56z5NbtClQhHP92Tl2T0cKa635rJbDVz3a \
  -e CREATE_SUPERUSER=admin:admin \
  -e PORT=8000 \
  -p 8000:8000 \
  bugsink/bugsink
```

- Visit http://localhost:8000/, where you’ll see a login screen. The default username and password are admin.
- set up a new project
- Make sure to edit the `dsn` in `sentry.config.js` 