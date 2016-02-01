[![npm](https://img.shields.io/npm/v/start-simple-logger.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/simple-logger.svg?style=flat-square)](https://travis-ci.org/start-runner/simple-logger)
[![deps](https://img.shields.io/gemnasium/start-runner/simple-logger.svg?style=flat-square)](https://gemnasium.com/start-runner/simple-logger)

Simple logger for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-simple-logger
```

## Usage

```js
// tasks/index.js
import start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import clean from 'start-clean';

export function cleanBuild() {
    return start(logger())(
        files('build/'),
        clean()
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "clean-build": "npm run task cleanBuild"
}
```

```
$ npm run clean-build

[files]: start
[files]: /beep/boop/build
[files]: done
[clean]: start
[clean]: /beep/boop/build
[clean]: done
```

## Arguments

`logger(options)`

* `options` – logger options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output
