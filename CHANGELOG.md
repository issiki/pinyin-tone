# Changelog

更新日志

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) | [如何维护更新日志](https://keepachangelog.com/zh-CN/1.0.0/),

and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) | [语义化版本](https://semver.org/lang/zh-CN/).


## [2.0.7] 2021-08-13

### Patched

* `node_modules/glob-parent` 5.1.1 -> 5.1.2

```
glob-parent  <5.1.2
Severity: moderate
Regular expression denial of service - https://npmjs.com/advisories/1751
```

## [2.0.6] 2021-05-21

### Added

* `index.d.ts`: built-in TypeScript declaration.

### Patched

* `node_modules/lodash`: `4.17.20` -> `4.17.21`
* repository url in `package.json`.

## [2.0.4] 2021-03-30

### Fixed
* Upgrade `y18n` to v4.0.1 because the npm package `y18n` before version 3.2.2, 4.0.1, and 5.0.5 is vulnerable to Prototype Pollution.
* 将`y18n`升级到v4.0.1因为3.2.2、4.0.1和5.0.5之前的版本易受原型污染。

### Upgrade
* Upgrade `chai` to v4.3.4.
* 将`chai`升级到v4.3.4。

## [2.0.0] 2020-11-11

### Changed

* Rewrite main code.
* 重写了主要代码
* Rewrite test.
* 重写了测试。

### Fixed

* Add /`ui`/.
* 补上了/`ui`/。

## [1.2.2]

### Changed

* update dependencies to fix security alerts
* 更新依赖，修复安全警告

## [1.2.0]

### Changed

* more tests.
* 更多的测试。

## [1.1.0] - 2019-03-05

### Changed

* add vowels `ü`/`ün`/`üe`/`üan` for mocha test.
* 为mocha测试增加了`ü`/`ün`/`üe`/`üan`。
* tone number allows `0` now.
* 声调数字可以为`0`了。

### Added

* add mocha test.
* 增加了mocha测试。

## [1.0.0] - 2019-03-05

### Changed

* repository changed.
* update README.md

## [0.1.4] - 2019-02-27

### Fixed

* update README.md. correct spellings.
* 更新README.md。修正拼写。
* add description in Simplified Chinese.
* 增加简体中文描述。

## [0.1.3] - 2019-02-20

### Fixed

* update README.md. correct spellings and urls.
* 更新README.md。修正拼写和链接。

## [0.1.1] - 2019-02-18

### Fixed

* missing `y` and `w`.
* 缺少`y`和`w`
