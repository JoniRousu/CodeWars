class RomanNumbers {
    constructor() { }

    toRoman(i) {
        let input = i;
        let roman = "";

        while (input >= 1000) {
            roman += "M";
            input -= 1000;
        }

        while (input >= 500) {
            if (input >= 900) {
                roman += "CM";
                input -= 900;
                continue;
            }
            roman += "D";
            input -= 500;
        }

        while (input >= 100) {
            if (input >= 400) {
                roman += "CD";
                input -= 400;
                continue;
            }
            roman += "C";
            input -= 100;
        }

        while (input >= 50) {
            if (input >= 90) {
                roman += "XC";
                input -= 90;
                continue;
            }
            roman += "L";
            input -= 50;
        }

        while (input >= 10) {
            if (input >= 40) {
                roman += "XL";
                input -= 40;
                continue;
            }
            roman += "X";
            input -= 10;
        }
        if (input === 9) {
            roman += "IX";
            input -= 9;
        }
        
        if (input >= 5) {
            roman += "V";
            input -= 5;
        }
        if (input === 4) {
            roman += "IV";
            input -= 4;
        }
        while (input > 0) {
            roman += "I";
            input -= 1;
        }

        return roman;
    }

    fromRoman(i) {
        let input = i;
        let number = 0;

        for (var j = 0; j < input.length; j++) {
            if (input.charAt(j) === 'M') {
                number += 1000;
            }
            if (input.charAt(j) === 'D') {
                number += 500;
            }
            if (input.charAt(j) === 'C') {
                if (input.charAt(j+1) === 'M') {
                    number += 900;
                    j++;
                } else if (input.charAt(j+1) === 'D') {
                    number += 400;
                    j++;
                } else {
                    number += 100;
                }
            }
            if (input.charAt(j) === 'L') {
                number += 50;
            }
            if (input.charAt(j) === 'X') {
                if (input.charAt(j+1) === 'L') {
                    number += 40;
                    j++;
                } else if (input.charAt(j+1) === 'C') {
                    number += 90;
                    j++;
                } else {
                    number += 10;
                }
            }
            if (input.charAt(j) === 'V') {
                number += 5;
            }
            if (input.charAt(j) === 'I') {
                if (input.charAt(j+1) === 'X') {
                    number += 9;
                    j++;
                } else if (input.charAt(j+1) === 'V') {
                    number += 4;
                    j++;
                } else {
                    number += 1;
                }
            }
        }
        return number;
    }
}

let RomanNumerals = new RomanNumbers();