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
            switch (input.charAt(j)) {
                case 'M': number += 1000; break;
                case 'D': number += 500; break;
                case 'C': switch (input.charAt(j+1)) {
                    case 'M': number += 900; j++; break;
                    case 'D': number += 400; j++; break;
                    default: number += 100; break;
                } break;
                case 'L': number += 50; break;
                case 'X': switch (input.charAt(j+1)) {
                    case 'C': number += 90; j++; break;
                    case 'L': number += 40; j++; break;
                    default: number += 10; break;
                } break;
                case 'V': number += 5; break;
                case 'I': switch (input.charAt(j+1)) {
                    case 'X': number += 9; j++; break;
                    case 'V': number += 4; j++; break;
                    default: number += 1; break;
                } break;
            }
        }
        return number;
    }
}

let RomanNumerals = new RomanNumbers();