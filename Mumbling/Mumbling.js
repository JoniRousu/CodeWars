function accum(s) {
  mumbleStr = "";
  for(let i = 0; i < s.length; i++) {
    let char = s.slice(i,i+1).toLowerCase();
    mumbleStr += char.toUpperCase();
    for (let j = 0; j < i; j++) {
      mumbleStr += char;
    } 
    if (!(i === s.length-1)) {
      mumbleStr += '-';
    }
  }
  return mumbleStr;
}
