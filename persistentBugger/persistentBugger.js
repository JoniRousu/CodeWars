function persistence(num) {
    if (num < 10) return 0;
    
    let persistence = 0;
    let digits = num.toString().split('');
    let currentProduct = 1;
 
    while (true) {
        for(let digit of digits) {
            currentProduct *= parseInt(digit);
        }
        digits = currentProduct.toString().split('');
        persistence++;
        if (currentProduct < 10) {
            break;
        } else {
            currentProduct = 1;
        }
    }
  
     return persistence;
  }