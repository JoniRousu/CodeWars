function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return "";
    }

    let longestStrings = [];

    for (let i = 0; i < k; i++) {
        longestStrings.push(strarr[i]);
    }

    if (strarr.length === k) {
        concatStrings(longestStrings);
    }

    let lengthOfLongest = CalcLengthOfStrings(longestStrings, k);
    
    // Window

    for (let i = 1; i <= (strarr.length-k); i++) {
        let window = [];
        for (let j = 0; j < k; j++) {
            window.push(strarr[j+i]);
        }
        if(CalcLengthOfStrings(window, k) > lengthOfLongest) {
            lengthOfLongest = CalcLengthOfStrings(window, k);
            longestStrings = window;
        }
    }

    return concatStrings(longestStrings);

}

function CalcLengthOfStrings(strArr, k) {
    let len = 0;
    for (let i = 0; i < k; i++) {
        len += strArr[i].length;
    }
    return len;
}

function concatStrings(stringArr) {
    let str = "";
    for(string of stringArr) {
        str += string; 
    }
    return str;
}