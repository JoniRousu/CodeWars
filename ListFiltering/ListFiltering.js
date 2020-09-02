function filter_list(l) {
    let arr = [];
    for (el of l) {
      if(typeof el === "number") {
        arr.push(el);
      } 
    }
    return arr;
  }