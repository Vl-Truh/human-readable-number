module.exports = function toReadable (n) {
  let res = '';

    const underTwenty = [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fiveteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen'
    ]

    const twoDigit = [
        'Ten',
        'Twenty',
        'Thirty',
        'Fourty',
        'Fivty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety'
    ]

    const threeDigit = [
        'One hundred',
        'Two hundred',
        'Three hundred',
        'Four hundred',
        'Five hundred',
        'Six hundred',
        'Seven hundred',
        'Eight hundred',
        'Nine hundred',

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
