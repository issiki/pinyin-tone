# pinyin-tone

* Another wheel that converts Hanyu pinyin "tone numbers" to "tone marks".
* 又一个把“汉语拼音声调数字”转换成“声调符号”的轮子。

* I assume you already know what [拼音(Pinyin)](https://en.wikipedia.org/wiki/Pinyin) is and how to write correct pinyin.
* 假设您已经知道什么是[拼音(Pinyin)](https://en.wikipedia.org/wiki/Pinyin)、知道如何写正确的拼音。

* I would be very grateful if you could [tell me that this plugin is useful👍](https://github.com/issiki/pinyin-tone/issues/new?assignees=issiki&labels=good+first+issue&template=leave-a-message-for-futaba-isshiki.md&title=%F0%9F%91%8D).

* 留言[👍鼓励作者](https://github.com/issiki/pinyin-tone/issues/new?assignees=issiki&labels=good+first+issue&template=MESSAGE.md&title=%F0%9F%91%8D)。

## Setup

[![NPM](https://nodei.co/npm/pinyin-tone.png)](https://nodei.co/npm/pinyin-tone/)

* via npm:
* 通过NPM安装：

```bash
npm install pinyin-tone
```

## Usage

```javascript
// this module exports a function, name it as `pinyin` or what you like.
var pinyin = require('pinyin-tone');

// call the function
var hatsune_miku = pinyin('chu1 yin1 wei4 lai2'); // ---> 'chū yīn wèi lái'
var megurine_luka = pinyin("xun2 yin1 liu2 ge1"); // ---> 'xún yīn liú gē'
var han = pinyin("han4 yu3 pin1 yin1 fang1 an4"); // ---> 'hàn yǔ pīn yīn fāng àn'

// 儿化音(ér huà yīn)
var huar = pinyin("huar1 renr2 shuir3 yuer4"); // ---> 'huār rénr shuǐr yuèr'

// 声母(shēng mǔ)
var bpmf = pinyin("b p m f"); // ---> 'b p m f'

// 韵母(yùn mǔ)
var yun = pinyin("an1 vn2 ong3 uen4"); // ---> 'ān ǘn ǒng uèn'

// special
var liuyun = pinyin("liou2 yuen2"); // ---> 'liú yún' // use in reality
var iou_uen = pinyin("iou1 uen4"); // ---> 'iōu uèn' // only yùn mǔ

// or some pinyin that not used in reality.
var fantastic = pinyin("bong1 tv2 pe3 wir4"); // ---> 'bōng tǘ pě wìr'
```

## Changelog

## [2.0.0] 2020-11-11

### Changed

* Rewrite main code.
* 重写了主要代码
* Rewrite test.
* 重写了测试。

### Fixed

* Add /`ui`/.
* 补上了/`ui`/。

* see [changelog here](https://github.com/issiki/pinyin-tone/blob/master/CHANGELOG.md).
* 更新日志[在这里看](https://github.com/issiki/pinyin-tone/blob/master/CHANGELOG.md)。

## Tests

see `test/test.js`.

* Rewrite tests. 2020-11-11
* 重写了测试。2020-11-11

## Issues

* submit any [bugs/issues about this package here](https://github.com/issiki/pinyin-tone/issues). Thank you!
* 有任何与此包相关的疑问或者<ruby><rb>缺陷</rb><rp>(</rp><rt>BUGs</rt><rp>)</rp></ruby>请[在这里提交](https://github.com/issiki/pinyin-tone/issues)。感谢！

## License

* MIT ©[Futaba Isshiki](https://futaba.love "一色双叶的笔记")

## About 汉语拼音方案(hàn yǔ pīn yīn fāng àn)

You can find [汉语拼音方案.pdf] from this link: <http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/195802/t19580201_186000.html>

[汉语拼音方案.pdf]:http://www.moe.gov.cn/ewebeditor/uploadfile/2015/03/02/20150302165814246.pdf
