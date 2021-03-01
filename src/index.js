module.exports = function toReadable (number) {
	 const words = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    if (number == 0) return "zero";

    const hundred = ~~(number / 100) ? `${words[~~(number / 100)]} hundred` : "";

    const ten_check = {
        value: number % 100,
        condition: number % 100 >= 10 && number % 100 <= 20
    };
    const tenths = ten_check.condition ? ten_check.value : ~~(ten_check.value / 10) * 10;
    const tenths_string = tenths ? `${words[tenths]}` : "";

    const ones = ten_check.condition ? 0 : ten_check.value % 10;
    const ones_string = ones ? `${words[ones]}` : "";

    return `${hundred} ${tenths_string} ${ones_string}`;
};

