module.exports = function toReadable (n) {
  let res = '';

    const underTwenty = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    const twoDigit = [
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    const threeDigit = [
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred',

    ]

    if (n < 20) {
        res += underTwenty[n];
    }

    if ((n >= 20 && n <= 90) && (n % 10 == 0)) {
        res += twoDigit[n / 10 - 1]
    }

    if ((n >= 20 && n <= 99) && (n % 10 !== 0)) {
        res += `${twoDigit[Math.floor(n / 10) - 1]} ${underTwenty[n % 10]}`;
    }

    if (n >= 100 && n % 100 == 0) {
        res += threeDigit[n / 100 - 1];
    }

    if ((n > 100) && (n % 10 == 0) && (n % 100 !== 0)) {
        res += `${threeDigit[Math.floor(n / 100) - 1]} and ${twoDigit[(n % 100) / 10 - 1]}`
    }
    if (n > 100 && n % 10 !== 0) {
        res += `${threeDigit[Math.floor(n / 100) - 1]} and ${twoDigit[Math.floor((n % 100) / 10 - 1)]} ${underTwenty[n % 10]}`
    }

    return res;
}
