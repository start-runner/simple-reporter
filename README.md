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

export function temp() {
    return start(logger)(
        function beep(resolve, reject) {
            resolve(':)');
        },
        function boop(resolve, reject) {
            reject(':(');
        }
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "temp": "npm run task temp"
}
```

```
$ npm run temp

[beep]: start
[beep]: :)
[beep]: done
[boop]: start
[boop]: :(
[boop]: error
```
