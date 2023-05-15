var lastDigit = function(str1, str2){
  if (str2 === '0') return 1;
  let b = Number(str1.slice(-1));
  let r = Number(str2.slice(-2)) % 4;
  if (r === 0) r = 4;
  return Number(String(b**r).slice(-1));
}
