// return masked string
function maskify(cc) {
    let maskedStr = '';
    if (cc.length > 4) {
      for(let i = 0; i < cc.length-4; i++) {
        maskedStr += '#';
      }
      maskedStr += cc.slice(cc.length - 4);
    } else {
      maskedStr = cc;
    }
    return maskedStr;
  }