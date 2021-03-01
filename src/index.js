module.exports = function toReadable (number) {
	const underTwenty = ["zero",
                         "one",
                         "two", 
                         "three", 
                         "four", 
                         "five",
						 "six",
                         "seven", 
                         "eight", 
                         "nine", 
                         "ten",
						 "eleven",
                         "twelve", 
                         "thirteen",
                         "fourteen",
                         "fifteen",
						 "sixteen",
                         "seventeen",
                         "eighteen",
                         "nineteen",
                         "twenty"
                        ];
    
	const tens = ["twenty",
                  "thirty",
                  "forty",
                  "fifty", 
                  "sixty",
                  "seventy", 
                  "eighty", 
                  "ninety"
                 ];
    
    let final = "";
    
	if(number == 0){
		return underTwenty[0];
	}
    
	if(Math.floor(number/100)){
		final += underTwenty[Math.floor(number/100)] + " hundred";
		number -= Math.floor(number/100)*100;
	}
    
	if(Math.floor(number/10)>1 && number != 20){
		if(final.length != 0){
			final += " ";
		}
		final += tens[Math.floor(number/10)-2];
		number -= Math.floor(number/10)*10;
	}
    
	if(number == 0){
			return final;
	}
    
	if(result.length != 0){
		final += " ";
	}
    
	return final += underTwenty[number]
}
