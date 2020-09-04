function inArray(array1,array2){
    let intersection = [];

    for (let a2 of array2) {
        for (let a1 of array1) {
            if (a2.includes(a1) && !(intersection.includes(a1))) {
                intersection.push(a1);
            }
        }
    } 
    return intersection.sort();
  }