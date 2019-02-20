# pinyin-tone
Another wheel that converts "Hanyu pinyin tone numbers" to "tone marks".

I assume you already know what [<ruby><rb>拼音</rb><rp>(</rp><rt>Pinyin</rt><rp>)</rp><ruby>](https://en.wikipedia.org/wiki/Pinyin) is and how to write correct pinyin.

## Setup

via npm:
```bash
$ npm install pinyin-tone
```

## Usage
```javascript
var PYTone = require('pinyin-tone');
var hatsune_miku = PYTone('chu1 yin1 wei4 lai2');
console.log(hatsune_miku); // ---> 'chū yīn wèi lái'
var megurine_luka = PYTone("xun2 yin1 liu2 ge1");
console.log(megurine_luka); // ---> 'xún yīn liú gē'
```

## Changelog

see [changelog here](https://github.com/issiki/pinyin-tone-marks/blob/master/CHANGELOG.md).

## Tests

there is no tests yet.

## Issues

submit [issues or bugs here](https://github.com/issiki/pinyin-tone-marks/issues). Thank you!

## License
MIT ©[Futaba Isshiki](https://futaba.love)
