# pinyin-tone
Another wheel that converts "Hanyu pinyin tone numbers" to "tone marks".

## Setup
```bash
$ npm install pinyin-tone
```

## Usage
```javascript
var PYTone = require('pinyin-tone');
var hatsne_miku = PYTone('chu1 yin1 wei4 lai2');
console.log(hatsne_miku); // ---> 'chū yīn wèi lái'
var megurine_luka = PYTone("xun2 yin1 liu2 ge1");
console.log(megurine_luka); // ---> 'xún yīn liú gē'
```

## Changelog

see [changelog here](https://github.com/issiki/pinyin-tone-marks/).

## Tests

there is no tests yet.

## Issues

submit [bugs here](https://github.com/issiki/pinyin-tone-marks/issues).

## License
MIT ©[Futaba Isshiki](https://www.futaba.love)
