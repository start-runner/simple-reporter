# start-simple-logger

[![npm](https://img.shields.io/npm/v/start-simple-logger.svg?style=flat-square)](https://www.npmjs.com/package/start-simple-logger)
[![travis](http://img.shields.io/travis/start-runner/simple-logger.svg?style=flat-square)](https://travis-ci.org/start-runner/simple-logger)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/simple-logger.svg?style=flat-square)](https://codecov.io/github/start-runner/simple-logger)
[![deps](https://img.shields.io/gemnasium/start-runner/simple-logger.svg?style=flat-square)](https://gemnasium.com/start-runner/simple-logger)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Simple logger for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-simple-logger
```

## Usage

```js
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

```
[files]: start
[files]: /beep/boop/build
[files]: done
[clean]: start
[clean]: /beep/boop/build
[clean]: done
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`logger(options)`

* `options` – logger options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output
