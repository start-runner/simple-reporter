# start-simple-reporter

[![npm](https://img.shields.io/npm/v/start-simple-reporter.svg?style=flat-square)](https://www.npmjs.com/package/start-simple-reporter)
[![linux build](https://img.shields.io/travis/start-runner/simple-reporter/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/simple-reporter)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/simple-reporter/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/simple-reporter)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/simple-reporter/master.svg?style=flat-square)](https://codecov.io/github/start-runner/simple-reporter)
[![deps](https://img.shields.io/gemnasium/start-runner/simple-reporter.svg?style=flat-square)](https://gemnasium.com/start-runner/simple-reporter)

Simple reporter for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-simple-reporter
```

## Usage

```js
import start from 'start';
import reporter from 'start-simple-reporter';
import files from 'start-files';
import clean from 'start-clean';

export function cleanBuild() {
    return start(reporter())(
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

`reporter(options)`

* `options` – reporter options, `{ mute: [] }` by default
  * `mute` – array of task names to mute any output from
