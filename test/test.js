'use strict';
const assert = require('assert');
const pinyin = require('../index');
// 声母
var _C = "bpmfdtnlgkjqxzcsrwyh".split('').concat(['zh', 'ch', 'sh']);
// 韵母
var _V = {
  i: ['ī', 'í', 'ǐ', 'ì'], // i
  u: ['ū', 'ú', 'ǔ', 'ù'], // u
  ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ'], // ü
  v: ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
  a: ['ā', 'á', 'ǎ', 'à'], // a
  ia: ['iā', 'iá', 'iǎ', 'ià'],
  ua: ['uā', 'uá', 'uǎ', 'uà'],
  o: ['ō', 'ó', 'ǒ', 'ò'], // o
  uo: ['uō', 'uó', 'uǒ', 'uò'],
  e: ['ē', 'é', 'ě', 'è'], // e
  ie: ['iē', 'ié', 'iě', 'iè'],
  üe: ['üē', 'üé', 'üě', 'üè'],
  ai: ['āi', 'ái', 'ǎi', 'ài'],
  uai: ['uāi', 'uái', 'uǎi', 'uài'],
  ei: ['ēi', 'éi', 'ěi', 'èi'],
  uei: ['uēi', 'uéi', 'uěi', 'uèi'],
  ao: ['āo', 'áo', 'ǎo', 'ào'],
  iao: ['iāo', 'iáo', 'iǎo', 'iào'],
  ou: ['ōu', 'óu', 'ǒu', 'òu'],
  iu: ['iū', 'iú', 'iǔ', 'iù'],
  an: ['ān', 'án', 'ǎn', 'àn'],
  ian: ['iān', 'ián', 'iǎn', 'iàn'],
  uan: ['uān', 'uán', 'uǎn', 'uàn'],
  üan: ['üān', 'üán', 'üǎn', 'üàn'],
  en: ['ēn', 'én', 'ěn', 'èn'],
  in: ['īn', 'ín', 'ǐn', 'ìn'],
  un: ['ūn', 'ún', 'ǔn', 'ùn'],
  ün: ['ǖn', 'ǘn', 'ǚn', 'ǜn'],
  ang: ['āng', 'áng', 'ǎng', 'àng'],
  iang: ['iāng', 'iáng', 'iǎng', 'iàng'],
  uang: ['uāng', 'uáng', 'uǎng', 'uàng'],
  eng: ['ēng', 'éng', 'ěng', 'èng'],
  ing: ['īng', 'íng', 'ǐng', 'ìng'],
  ueng: ['uēng', 'uéng', 'uěng', 'uèng'],
  ong: ['ōng', 'óng', 'ǒng', 'òng'],
  iong: ['iōng', 'ióng', 'iǒng', 'iòng'],
};

_C.forEach((c) => {
  // group: a o e i u v
  var group_a = [
    // a o e i u ü (//TODO: v)
    ['a'].concat(_V.a),
    ['o'].concat(_V.o),
    ['e'].concat(_V.e),
    ['i'].concat(_V.i),
    ['u'].concat(_V.u),
    ['ü'].concat(_V.ü),
    // ia ua uo ie üe(//TODO: ve)
    // ai ei ao ou iu
    // an en in un ün(//TODO: vn)
    ['ia'].concat(_V.ia),
    ['ua'].concat(_V.ua),
    ['uo'].concat(_V.uo),
    ['ie'].concat(_V.ie),
    ['üe'].concat(_V.üe),

    ['ai'].concat(_V.ai),
    ['ei'].concat(_V.ei),
    ['ao'].concat(_V.ao),
    ['ou'].concat(_V.ou),
    ['iu'].concat(_V.iu),

    ['an'].concat(_V.an),
    ['en'].concat(_V.en),
    ['in'].concat(_V.in),
    ['un'].concat(_V.un),
    ['ün'].concat(_V.ün),
    // uai uei iao ian uan
    // üan ang eng ing ong
    ['uai'].concat(_V.uai),
    ['uei'].concat(_V.uei),
    ['iao'].concat(_V.iao),
    ['ian'].concat(_V.ian),
    ['uan'].concat(_V.uan),

    ['üan'].concat(_V.üan),
    ['ang'].concat(_V.ang),
    ['eng'].concat(_V.eng),
    ['ing'].concat(_V.ing),
    ['ong'].concat(_V.ong),
    // iang uang ueng iong
    ['iang'].concat(_V.iang),
    ['uang'].concat(_V.uang),
    ['ueng'].concat(_V.ueng),
    ['iong'].concat(_V.iong),
  ];

  group_a.forEach(v_group => {
    describe(`${c} ${v_group[0]}`, function () {
      v_group.forEach((v, i) => {
        // 轻声、1、2、3、4
        it(`${c}${v_group[0]}${i} should be ${c}${v_group[i]}`, function () {
          // if (i !== 0) {
            // assert.equal(actual, expected);
            // actual = pinyin(c + v + number)
            assert.equal(pinyin(`${c}${v_group[0]}${i}`), `${c}${v_group[i]}`);
          // }
        });
        // TODO: 儿化音
      });
    })

  })
});
