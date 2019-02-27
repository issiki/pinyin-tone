# pinyin-tone

* Another wheel that converts "Hanyu pinyin tone numbers" to "tone marks".
* 又一个把“汉语拼音声调数字”转换成“声调符号”的轮子。

I assume you already know what [拼音(Pinyin)](https://en.wikipedia.org/wiki/Pinyin) is and how to write correct pinyin.
* 假设您已经知道什么是[拼音(Pinyin)](https://en.wikipedia.org/wiki/Pinyin)、知道如何写正确的拼音。

## Setup

* via npm:
* 通过NPM安装：

```bash
$ npm install pinyin-tone
```

## Usage

```javascript
var PYTone = require('pinyin-tone');

var hatsune_miku = PYTone('chu1 yin1 wei4 lai2'); // pinyin of "初音未来"
console.log(hatsune_miku); // ---> 'chū yīn wèi lái'

var megurine_luka = PYTone("xun2 yin1 liu2 ge1"); // pinyin of "巡音流歌"
console.log(megurine_luka); // ---> 'xún yīn liú gē'
```

## Changelog

* see [changelog here](https://github.com/issiki/pinyin-tone-marks/blob/master/CHANGELOG.md).
* 更新日志[在这里看](https://github.com/issiki/pinyin-tone-marks/blob/master/CHANGELOG.md)。

## Tests

* there are no tests yet.
* 目前没有测试。

## Issues

* submit any [bugs/issues about this package here](https://github.com/issiki/pinyin-tone-marks/issues). Thank you!
* 有任何与此包相关的疑问或者<ruby><rb>缺陷</rb><rp>(</rp><rt>BUGs</rt><rp>)</rp></ruby>请[在这里提交](https://github.com/issiki/pinyin-tone-marks/issues)。感谢！

## License

* MIT ©[Futaba Isshiki](https://futaba.love "一色双叶的笔记")
