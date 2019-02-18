'use strict';
// ^(声母?) + (韵母) + (儿化音?) + (声调?)$
const CONSONANT_VOWEL_ER_TONE = /^([bpmfdtnlgkjqxzcsr]?h?)(iong|ong|ueng|ing|eng|uang|iang|ang|un|in|en|vuan|uan|ian|an|iu|ou|iao|ao|uei|ei|uai|ai|ue|ve|ie|e|uo|o|ua|ia|a|v|u|i)(r?)([1234]?)$/;
// āáǎà ōóǒò ê ēéěè īíǐì ūúǔù ǖǘǚǜü
const VOWEL_TONE_MARKS = {
    i: ['ī', 'í', 'ǐ', 'ì'], // i
    u: ['ū', 'ú', 'ǔ', 'ù'], // u
    ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ'], // ü
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

/**
 * 将“字母+数字”转换成“拼音声调”
 * @param {string} args like "ma1 ma2 ma3 ma4 ma"
 * @return {string} like "mā má mǎ mà ma"
 */
function Pinyin(args) {
    // args must be string
    if (typeof args !== 'string') {
        return '';
    }
    // 分词
    let splitted = args.split(' ');

    const result = splitted.map(origin => {
        const exec_array = CONSONANT_VOWEL_ER_TONE.exec(origin);
        if (!exec_array) {
            return origin;
        }

        const consonant = exec_array[1]; // 声母
        const vowel = exec_array[2]; // 韵母
        const erhuayin = exec_array[3]; // 儿化音
        const tone_number = exec_array[4]; // 声调

        let tone = vowel;
        // jqx + ü
        switch (consonant) {
            case 'j':
            case 'q':
            case 'x':
                break;
            default:
                tone = tone.replace(/^v(.*)$/, 'ü$1');
                break;
        }
        //标记声调(mark the tone)
        switch (tone_number) {
            case '1':
                tone = VOWEL_TONE_MARKS[tone][0];
                break;
            case '2':
                tone = VOWEL_TONE_MARKS[tone][1];
                break;
            case '3':
                tone = VOWEL_TONE_MARKS[tone][2];
                break;
            case '4':
                tone = VOWEL_TONE_MARKS[tone][3];
                break;
            default:
                break;
        }

        return consonant + tone + erhuayin;
    });

    return result.join(' ');
}
module.exports = Pinyin;