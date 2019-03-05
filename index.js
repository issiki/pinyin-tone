'use strict';
// ^(声母?) + (韵母) + (儿化音?) + (声调?)$
const CONSONANT_VOWEL_ER_TONE = /^([bpmfdtnlgkjqxzcsrwy]?h?)(iong|ong|ueng|ing|eng|uang|iang|ang|un|ün|in|en|vuan|üan|uan|ian|an|iu|ou|iao|ao|uei|ei|uai|ai|ue|üe|ve|ie|e|uo|o|ua|ia|a|v|ü|u|i)(r?)([01234]?)$/;
// āáǎà ōóǒò ê ēéěè īíǐì ūúǔù ǖǘǚǜü
const VOWEL_TONE_MARKS = {
    i: ['i','ī', 'í', 'ǐ', 'ì'], // i
    u: ['u','ū', 'ú', 'ǔ', 'ù'], // u
    ü: ['ü','ǖ', 'ǘ', 'ǚ', 'ǜ'], // ü
    a: ['a','ā', 'á', 'ǎ', 'à'], // a
    ia: ['ia','iā', 'iá', 'iǎ', 'ià'],
    ua: ['ua','uā', 'uá', 'uǎ', 'uà'],
    o: ['o','ō', 'ó', 'ǒ', 'ò'], // o
    uo: ['uo','uō', 'uó', 'uǒ', 'uò'],
    e: ['e','ē', 'é', 'ě', 'è'], // e
    ie: ['ie','iē', 'ié', 'iě', 'iè'],
    üe: ['üe','üē', 'üé', 'üě', 'üè'],
    ai: ['ai','āi', 'ái', 'ǎi', 'ài'],
    uai: ['uai','uāi', 'uái', 'uǎi', 'uài'],
    ei: ['ei','ēi', 'éi', 'ěi', 'èi'],
    uei: ['uei','uēi', 'uéi', 'uěi', 'uèi'],
    ao: ['ao','āo', 'áo', 'ǎo', 'ào'],
    iao: ['iao','iāo', 'iáo', 'iǎo', 'iào'],
    ou: ['ou','ōu', 'óu', 'ǒu', 'òu'],
    iu: ['iu','iū', 'iú', 'iǔ', 'iù'],
    an: ['an','ān', 'án', 'ǎn', 'àn'],
    ian: ['ian','iān', 'ián', 'iǎn', 'iàn'],
    uan: ['uan','uān', 'uán', 'uǎn', 'uàn'],
    üan: ['üan','üān', 'üán', 'üǎn', 'üàn'],
    en: ['en','ēn', 'én', 'ěn', 'èn'],
    in: ['in','īn', 'ín', 'ǐn', 'ìn'],
    un: ['un','ūn', 'ún', 'ǔn', 'ùn'],
    ün: ['ün','ǖn', 'ǘn', 'ǚn', 'ǜn'],
    ang: ['ang','āng', 'áng', 'ǎng', 'àng'],
    iang: ['iang','iāng', 'iáng', 'iǎng', 'iàng'],
    uang: ['uang','uāng', 'uáng', 'uǎng', 'uàng'],
    eng: ['eng','ēng', 'éng', 'ěng', 'èng'],
    ing: ['ing','īng', 'íng', 'ǐng', 'ìng'],
    ueng: ['ueng','uēng', 'uéng', 'uěng', 'uèng'],
    ong: ['ong','ōng', 'óng', 'ǒng', 'òng'],
    iong: ['iong','iōng', 'ióng', 'iǒng', 'iòng'],
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
        // jqx + v ---> jqx + ü
        switch (consonant) {
            case 'j':
            case 'q':
            case 'x':
                tone = tone.replace(/^v(.*)$/, 'u$1');
                break;
            default:
                tone = tone.replace(/^v(.*)$/, 'ü$1');
                break;
        }
        //标记声调(mark the tone)
        switch (tone_number) {
            case '0':
                tone=VOWEL_TONE_MARKS[tone][0];
                break;
            case '1':
                tone = VOWEL_TONE_MARKS[tone][1];
                break;
            case '2':
                tone = VOWEL_TONE_MARKS[tone][2];
                break;
            case '3':
                tone = VOWEL_TONE_MARKS[tone][3];
                break;
            case '4':
                tone = VOWEL_TONE_MARKS[tone][4];
                break;
            default:
                break;
        }

        return consonant + tone + erhuayin;
    });

    return result.join(' ');
}
module.exports = Pinyin;