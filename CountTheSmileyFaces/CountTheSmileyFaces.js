//return the total number of smiling faces in the array
function countSmileys(arr) {
    let cnt = 0;
    for (emoji of arr) {
      let tempCnt = 0;
      if (emoji.length <= 3) {
        if(emoji.charAt(0) === ':' || emoji.charAt(0) === ';') {
          tempCnt++;
        }
        let nose = 0;
        if(emoji.length != 2) {
          nose = 1;
        } else {
          tempCnt++;
        }
        if ((nose === 1) && (emoji.charAt(1) === '-' || emoji.charAt(1) === '~')) {
            tempCnt++;
        }
        if (emoji.charAt(1+nose) === ')' || emoji.charAt(1+nose) === 'D') {
            tempCnt++;
        }
      }
      if (tempCnt === 3) cnt++;
    }
    return cnt;
  }