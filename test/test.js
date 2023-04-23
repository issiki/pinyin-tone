'use strict';
// const { expect } = require('chai');
const pinyin_mod = require('../index');
const pinyin_v2 = require('../v2/index');

// test cases
console.log(pinyin_mod);

console.log(pinyin_mod('ya1 ho1'));
console.log(pinyin_v2('chu1 yin1 wei4 lai2'));

console.log(pinyin_v2('qi3 lai2 bu2 yuan4 zuo4 nu2 li4 de ren2 men'));
console.log(pinyin_v2('huar1 wei4 shen2 me zhe4 yang4 hong2'));
console.log(pinyin_v2('ba2 bai3 biao1 bing1 ben1 bei3 po1'));