# mmazzocchi.github.io
The personal site for Max Mazzocchi.

**NOTE**: GitHub pages requires that personal sites be served from the `master`
branch. Because of this, the base branch is called `production`. `master` is
used only by the `gh-pages` script, which will overwrite it with changes on
deployment.

## Getting Started
### Prerequisites
Install `npm` if not already installed.
Clone the repository and download dependencies:

```
$ git clone https://github.com/mmazzocchi/mmazzocchi.github.io/
$ cd mmazzocchi.github.io/
$ npm install
```

### Start a Development Server
```
$ npm start
```

### Build a Production Build
```
$ npm run build
```

### Deploy
**NOTE**: This will overwrite `master`!
```
$ npm run deploy
```

## License
MIT
