const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const splitToSpaces = expr.split('**********'); //Разделяем всю фразу на массив слов
    const result = []; //Будущий массив, где слово - подмассив, буква - значение подмассива
    for (let word of splitToSpaces) { //Делим слова на буквы, собираем буквы в значения подмассива
        let currentWord = [];
        for (let i = 1; i <= (word.length / 10); i++) {
            let dotOrDash = word.toString().slice(((i - 1) * 10), (i * 10));
            let letterToMorse = ''; //Собираем символы морзе в слова-массивы
            for (let j = 0; j < 10; j++) {
                if ((dotOrDash.slice(j, j + 2)) === '10') letterToMorse += '.';
                else if ((dotOrDash.slice(j, j + 2)) === '11') letterToMorse += '-';
                j++;
            }
            currentWord.push(letterToMorse);
        }
        let finalWord = '';
        for (item of currentWord) {
            finalWord += MORSE_TABLE[item]
        }
        result.push(finalWord);
    }

    return result.join(' ')
}

module.exports = {
    decode
}