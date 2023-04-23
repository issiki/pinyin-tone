'use strict';
const { expect } = require('chai');
const 转换为拼音 = require('../index');

const r = "r";
// 声母
const _声母表 = "bpmfdtnlgkhjqxzcsryw".split('').concat(['zh', 'ch', 'sh']);

const _a = ['a', 'ā', 'á', 'ǎ', 'à', 'a'];
const _o = ['o', 'ō', 'ó', 'ǒ', 'ò', 'o'];
const _e = ['e', 'ē', 'é', 'ě', 'è', 'e'];
const _ai = ['ai', 'āi', 'ái', 'ǎi', 'ài', 'ai'];
const _ei = ['ei', 'ēi', 'éi', 'ěi', 'èi', 'ei'];
const _ao = ['ao', 'āo', 'áo', 'ǎo', 'ào', 'ao'];
const _ou = ['ou', 'ōu', 'óu', 'ǒu', 'òu', 'ou'];
const _an = ['an', 'ān', 'án', 'ǎn', 'àn', 'an'];
const _en = ['en', 'ēn', 'én', 'ěn', 'èn', 'en'];
const _ang = ['ang', 'āng', 'áng', 'ǎng', 'àng', 'ang'];
const _eng = ['eng', 'ēng', 'éng', 'ěng', 'èng', 'eng'];
const _ong = ['ong', 'ōng', 'óng', 'ǒng', 'òng', 'ong'];

const _i = ['i', 'ī', 'í', 'ǐ', 'ì', 'i'];
const _ia = ['ia', 'iā', 'iá', 'iǎ', 'ià', 'ia'];

const _ie = ['ie', 'iē', 'ié', 'iě', 'iè', 'ie'];
const _iao = ['iao', 'iāo', 'iáo', 'iǎo', 'iào', 'iao'];
const _iou = ['iou', 'iōu', 'ióu', 'iǒu', 'iòu', 'iou'];
const _iu = ['iu', 'iū', 'iú', 'iǔ', 'iù', 'iu'];
const _ian = ['ian', 'iān', 'ián', 'iǎn', 'iàn', 'ian'];
const _in = ['in', 'īn', 'ín', 'ǐn', 'ìn', 'in'];
const _iang = ['iang', 'iāng', 'iáng', 'iǎng', 'iàng', 'iang'];
const _ing = ['ing', 'īng', 'íng', 'ǐng', 'ìng', 'ing'];
const _iong = ['iong', 'iōng', 'ióng', 'iǒng', 'iòng', 'iong'];

const _u = ['u', 'ū', 'ú', 'ǔ', 'ù', 'u'];
const _ua = ['ua', 'uā', 'uá', 'uǎ', 'uà', 'ua'];
const _uo = ['uo', 'uō', 'uó', 'uǒ', 'uò', 'uo'];
const _uai = ['uai', 'uāi', 'uái', 'uǎi', 'uài', 'uai'];
const _uei = ['uei', 'uēi', 'uéi', 'uěi', 'uèi', 'uei'];
const _ui = ['ui', 'uī', 'uí', 'uǐ', 'uì', 'ui'];
const _uan = ['uan', 'uān', 'uán', 'uǎn', 'uàn', 'uan'];
const _uen = ['uen', 'uēn', 'uén', 'uěn', 'uèn', 'uen'];
const _un = ['un', 'ūn', 'ún', 'ǔn', 'ùn', 'un'];
const _uang = ['uang', 'uāng', 'uáng', 'uǎng', 'uàng', 'uang'];
const _ueng = ['ueng', 'uēng', 'uéng', 'uěng', 'uèng', 'ueng'];

const _v = ['ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ', 'ü'];

const _ve = ['üe', 'üē', 'üé', 'üě', 'üè', 'üe'];
const _ue = ['ue', 'uē', 'ué', 'uě', 'uè', 'ue'];

const _van = ['üan', 'üān', 'üán', 'üǎn', 'üàn', 'üan'];
const _vn = ['ün', 'ǖn', 'ǘn', 'ǚn', 'ǜn', 'ün'];

const _韵母表 = {
  "a": _a,
  "o": _o,
  "e": _e,
  "ai": _ai,
  "ei": _ei,
  "ao": _ao,
  "ou": _ou,
  "an": _an,
  "en": _en,
  "ang": _ang,
  "eng": _eng,
  "ong": _ong,

  "i": _i,
  "ia": _ia,

  "ie": _ie,
  "iao": _iao,
  "iou": _iou,
  "iu": _iu,
  "ian": _ian,
  "in": _in,
  "iang": _iang,
  "ing": _ing,
  "iong": _iong,

  "u": _u,
  "ua": _ua,
  "uo": _uo,
  "uai": _uai,
  "uei": _uei,
  "ui": _ui,
  "uan": _uan,
  "uen": _uen,
  "un": _un,
  "uang": _uang,
  "ueng": _ueng,

  "v": _v,

  "ve": _ve,
  "ue": _ue,

  "van": _van,
  "vn": _vn,
};

// const _韵母表expect = [].concat(_a, _o, _e, _ai, _ei, _ao, _ou, _an, _en, _ang, _eng, _ong, _i, _ia, _ie, _iao, _iou, _iu, _ian, _in, _iang, _ing, _iong, _ui, _u, _ua, _uo, _uai, _uei, _uan, _uen, _un, _uang, _ueng, _v, _ve, _van, _vn);

/**
 *
 * @param {string} 韵母
 * @param {string|string[]} 预期结果
 */
function test韵母(韵母, 预期结果) {
  // 参数转换为字符串，用于比较
  let toBeEqual;
  if (typeof 预期结果 === "string") {
    toBeEqual = 预期结果;
  } else if (Array.isArray(预期结果)) {
    toBeEqual = 预期结果.join(" ")
  } else {
    expect.fail();
  }

  // expect(toBeEqual).to.be.not.a(typeof undefined);

  {
    const input = `${韵母} ${韵母}1 ${韵母}2 ${韵母}3 ${韵母}4 ${韵母}5`;
    it(`${input} ==> ${toBeEqual}`, () => {
      expect(转换为拼音(input)).to.be.equal(toBeEqual);
    });
  }

  {
    const input_r = `${韵母}r ${韵母}r1 ${韵母}r2 ${韵母}r3 ${韵母}r4 ${韵母}r5`;
    const toBeEqual_r = toBeEqual.split(" ").map(ee => ee + r).join(" ");
    it(`${input_r} ==> ${toBeEqual_r}`, () => {
      expect(转换为拼音(input_r)).to.be.equal(toBeEqual_r);
    });
  }
}

describe("Test 声母", () => {
  const input = _声母表.join(" ");
  it(`${input} ==> ${input}`, () => {
    expect(转换为拼音(input)).to.be.equal(input);
  });
});

describe("Test ng", () => {
  const input = "ng";
  const result = "ng";
  it(`${input} ==> ${result}`, () => {
    expect(转换为拼音(input)).to.be.equal(result);
  });
});

describe("Test e^", () => {
  // {
  //   const input = "e5";
  //   const result = "ê";

  //   it(`${input} ==> ${result}`, () => {
  //     expect(转换为拼音(input)).to.be.equal(result);
  //   });
  // }

  {
    const input = "e^";
    const result = "ê";

    it(`${input} ==> ${result}`, () => {
      expect(转换为拼音(input)).to.be.equal(result);
    });
  }
});

describe("Test 韵母", () => {
  test韵母("a", _a);
  test韵母("o", _o);
  test韵母("e", _e);
  test韵母("ai", _ai);
  test韵母("ei", _ei);
  test韵母("ao", _ao);
  test韵母("ou", _ou);
  test韵母("an", _an);
  test韵母("en", _en);
  test韵母("ang", _ang);
  test韵母("eng", _eng);
  test韵母("ong", _ong);

  test韵母("i", _i);
  test韵母("ia", _ia);

  test韵母("ie", _ie);
  test韵母("iao", _iao);
  test韵母("iou", _iou);
  test韵母("iu", _iu);
  test韵母("ian", _ian);
  test韵母("in", _in);
  test韵母("iang", _iang);
  test韵母("ing", _ing);
  test韵母("iong", _iong);

  test韵母("u", _u);
  test韵母("ua", _ua);
  test韵母("uo", _uo);
  test韵母("uai", _uai);
  test韵母("uei", _uei);
  test韵母("ui", _ui);
  test韵母("uan", _uan);
  test韵母("uen", _uen);
  test韵母("un", _un);
  test韵母("uang", _uang);
  test韵母("ueng", _ueng);

  test韵母("v", _v);

  test韵母("ve", _ve);
  test韵母("ue", _ue);

  test韵母("van", _van);

  test韵母("vn", _vn);

});

describe("Test 声母+韵母", () => {
  const _韵母input = [].concat("a o e ai ei ao ou an en ang eng ong i ia ie iao iou iu ian in iang ing iong ui u ua uo uai uei uan uen un uang ueng v ve van vn".trim().split(" "));
  const _b = _声母表;
  const _a = _韵母input;

  _b.forEach(_声母 => {
    _a.forEach(_韵母 => {
      // 特殊组合
      switch (_韵母) {
        case "v":
          {
            // j q x y + v => j q x y + u
            if (_声母 === "j" || _声母 === "q" || _声母 === "x" || _声母 === "y") {
              const 输入字符串jqxy_v = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

              const 预期结果 = `${_声母}${_韵母表["u"][0]} ${_声母}${_韵母表["u"][1]} ${_声母}${_韵母表["u"][2]} ${_声母}${_韵母表["u"][3]} ${_声母}${_韵母表["u"][4]} ${_声母}${_韵母表["u"][5]}`;

              it(`${输入字符串jqxy_v} ==> ${预期结果}`, () => {
                expect(转换为拼音(输入字符串jqxy_v)).to.be.equal(预期结果);
              })

              const 输入字符串jqxy_儿化音 = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;
              const 预期结果_儿化音 = 预期结果.split(" ").map(aa => aa + r).join(" ");

              it(`${输入字符串jqxy_儿化音} ==> ${预期结果_儿化音}`, () => {
                expect(转换为拼音(输入字符串jqxy_儿化音)).to.be.equal(预期结果_儿化音);
              });

              //非jqxy的声母
            } else {
              const 输入_声母_韵母_声调 = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

              const 预期结果 = `${_声母}${_韵母表["v"][0]} ${_声母}${_韵母表["v"][1]} ${_声母}${_韵母表["v"][2]} ${_声母}${_韵母表["v"][3]} ${_声母}${_韵母表["v"][4]} ${_声母}${_韵母表["v"][5]}`;

              it(`${输入_声母_韵母_声调} ==> ${预期结果}`, () => {
                expect(转换为拼音(输入_声母_韵母_声调)).to.be.equal(预期结果);
              });

              const 输入_声母_韵母_声调_儿化音 = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;

              const 预期结果_儿化音 = 预期结果.split(" ").map(aa => aa + r).join(" ");

              it(`${输入_声母_韵母_声调_儿化音} ==> ${预期结果_儿化音}`, () => {
                expect(转换为拼音(输入_声母_韵母_声调_儿化音)).to.be.equal(预期结果_儿化音);
              });
            }
          }
          break;

        case "van":
          {
            // j q x y + v => j q x y + u
            if (_声母 === "j" || _声母 === "q" || _声母 === "x" || _声母 === "y") {
              const input_jqx_u_ = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

              const result = `${_声母}${_韵母表["uan"][0]} ${_声母}${_韵母表["uan"][1]} ${_声母}${_韵母表["uan"][2]} ${_声母}${_韵母表["uan"][3]} ${_声母}${_韵母表["uan"][4]} ${_声母}${_韵母表["uan"][5]}`;

              it(`${input_jqx_u_} ==> ${result}`, () => {
                expect(转换为拼音(input_jqx_u_)).to.be.equal(result);
              });

              const input_r = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;

              const result_r = result.split(" ").map(aa => aa + r).join(" ");

              it(`${input_r} ==> ${result_r}`, () => {
                expect(转换为拼音(input_r)).to.be.equal(result_r);
              });

            } else {
              const input = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

              const result = `${_声母}${_韵母表[_韵母][0]} ${_声母}${_韵母表[_韵母][1]} ${_声母}${_韵母表[_韵母][2]} ${_声母}${_韵母表[_韵母][3]} ${_声母}${_韵母表[_韵母][4]} ${_声母}${_韵母表[_韵母][5]}`;

              it(`${input} ==> ${result}`, () => {
                expect(转换为拼音(input)).to.be.equal(result);
              });

              const input_r = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;

              const result_r = result.split(" ").map(aa => aa + r).join(" ");

              it(`${input_r} ==> ${result_r}`, () => {
                expect(转换为拼音(input_r)).to.be.equal(result_r);
              });
            }
          }
          break;

        case "ve": // shoud be \ui/
          {
            if (_声母 === "j" || _声母 === "q" || _声母 === "x" || _声母 === "y") {
              // ve ==> ue
              const input = `${_声母}ve ${_声母}ve1 ${_声母}ve2 ${_声母}ve3 ${_声母}ve4 ${_声母}ve5`;

              const result = `${_声母}${_韵母表["ue"][0]} ${_声母}${_韵母表["ue"][1]} ${_声母}${_韵母表["ue"][2]} ${_声母}${_韵母表["ue"][3]} ${_声母}${_韵母表["ue"][4]} ${_声母}${_韵母表["ue"][5]}`;

              it(`${input} ==> ${result}`, () => {
                expect(转换为拼音(input)).to.be.equal(result);
              });

              // ver ==> uer
              const input_r = `${_声母}ver ${_声母}ver1 ${_声母}ver2 ${_声母}ver3 ${_声母}ver4 ${_声母}ver5`;

              const result_r = `${_声母}${_韵母表["ue"][0]}r ${_声母}${_韵母表["ue"][1]}r ${_声母}${_韵母表["ue"][2]}r ${_声母}${_韵母表["ue"][3]}r ${_声母}${_韵母表["ue"][4]}r ${_声母}${_韵母表["ue"][5]}r`;

              it(`${input_r} ==> ${result_r}`, () => {
                expect(转换为拼音(input_r)).to.be.equal(result_r);
              });

            } else {
              // ve
              const input = `${_声母}ve ${_声母}ve1 ${_声母}ve2 ${_声母}ve3 ${_声母}ve4 ${_声母}ve5`;

              const result = `${_声母}${_韵母表["ve"][0]} ${_声母}${_韵母表["ve"][1]} ${_声母}${_韵母表["ve"][2]} ${_声母}${_韵母表["ve"][3]} ${_声母}${_韵母表["ve"][4]} ${_声母}${_韵母表["ve"][5]}`;

              it(`${input} ==> ${result}`, () => {
                expect(转换为拼音(input)).to.be.equal(result);
              });

              // ve+r
              const input_r = `${_声母}ver ${_声母}ver1 ${_声母}ver2 ${_声母}ver3 ${_声母}ver4 ${_声母}ver5`;

              const result_r = `${_声母}${_韵母表["ve"][0]}r ${_声母}${_韵母表["ve"][1]}r ${_声母}${_韵母表["ve"][2]}r ${_声母}${_韵母表["ve"][3]}r ${_声母}${_韵母表["ve"][4]}r ${_声母}${_韵母表["ve"][5]}r`;

              it(`${input_r} ==> ${result_r}`, () => {
                expect(转换为拼音(input_r)).to.be.equal(result_r);
              });
            }
          }
          break;

        case "uei": // shoud be \ui/
          {
            const input = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

            const result = `${_声母}${_韵母表["ui"][0]} ${_声母}${_韵母表["ui"][1]} ${_声母}${_韵母表["ui"][2]} ${_声母}${_韵母表["ui"][3]} ${_声母}${_韵母表["ui"][4]} ${_声母}${_韵母表["ui"][5]}`;

            it(`${input} ==> ${result}`, () => {
              expect(转换为拼音(input)).to.be.equal(result);
            });

            const input_r = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;

            const result_r = `${_声母}${_韵母表["ui"][0]}r ${_声母}${_韵母表["ui"][1]}r ${_声母}${_韵母表["ui"][2]}r ${_声母}${_韵母表["ui"][3]}r ${_声母}${_韵母表["ui"][4]}r ${_声母}${_韵母表["ui"][5]}r`;

            it(`${input_r} ==> ${result_r}`, () => {
              expect(转换为拼音(input_r)).to.be.equal(result_r);
            });
          }
          break;

        case "uen": // should be \un/
          {
            const input = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

            const result = `${_声母}${_韵母表["un"][0]} ${_声母}${_韵母表["un"][1]} ${_声母}${_韵母表["un"][2]} ${_声母}${_韵母表["un"][3]} ${_声母}${_韵母表["un"][4]} ${_声母}${_韵母表["un"][5]}`;

            it(`${input} ==> ${result}`, () => {
              expect(转换为拼音(input)).to.be.equal(result);
            });

            const input_r = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;

            const result_r = result.split(" ").map(aa => aa + r).join(" ");

            it(`${input_r} ==> ${result_r}`, () => {
              expect(转换为拼音(input_r)).to.be.equal(result_r);
            });
          }
          break;

        case "iou": // should be \iu/
          //uūúǔù
          {
            const input = `${_声母}iou ${_声母}iou1 ${_声母}iou2 ${_声母}iou3 ${_声母}iou4 ${_声母}iou5`;

            const result = `${_声母}${_韵母表["iu"][0]} ${_声母}${_韵母表["iu"][1]} ${_声母}${_韵母表["iu"][2]} ${_声母}${_韵母表["iu"][3]} ${_声母}${_韵母表["iu"][4]} ${_声母}${_韵母表["iu"][5]}`;

            it(`${input} ==> ${result}`, () => {
              expect(转换为拼音(input)).to.be.equal(result);
            });

            const input_r = `${_声母}iour ${_声母}iour1 ${_声母}iour2 ${_声母}iour3 ${_声母}iour4 ${_声母}iour5`;

            const result_r = result.split(" ").map(aa => aa + r).join(" ");

            it(`${input_r} ==> ${result_r}`, () => {
              expect(转换为拼音(input_r)).to.be.equal(result_r);
            });
          }
          break;

        default:
          {
            const input = `${_声母}${_韵母} ${_声母}${_韵母}1 ${_声母}${_韵母}2 ${_声母}${_韵母}3 ${_声母}${_韵母}4 ${_声母}${_韵母}5`;

            // it(`${_韵母表[_韵母]} should NOT be undefined`, () => {
            //   expect(_韵母表[_韵母]).to.not.be.a(typeof undefined, _韵母);
            // });

            const result = `${_声母}${_韵母表[_韵母][0]} ${_声母}${_韵母表[_韵母][1]} ${_声母}${_韵母表[_韵母][2]} ${_声母}${_韵母表[_韵母][3]} ${_声母}${_韵母表[_韵母][4]} ${_声母}${_韵母表[_韵母][5]}`;

            it(`${input} ==> ${result}`, () => {
              expect(转换为拼音(input)).to.be.equal(result);
            });

            const input_r = `${_声母}${_韵母}r ${_声母}${_韵母}r1 ${_声母}${_韵母}r2 ${_声母}${_韵母}r3 ${_声母}${_韵母}r4 ${_声母}${_韵母}r5`;

            const result_r = result.split(" ").map(aa => aa + r).join(" ");

            it(`${input_r} ==> ${result_r}`, () => {
              expect(转换为拼音(input_r)).to.be.equal(result_r);
            });
          }
          break;
      }
    });
  });
});
