var moveZeros = function (arr) {
    let movedArr = [];
    let nrOfZeros = 0;

    for (let element of arr) {
      if (element === 0) {
        nrOfZeros++;
      } else {
        movedArr.push(element);
      }
    }

    for (let i = 0; i < nrOfZeros; i++) {
      movedArr.push(0);
    }

    return movedArr;
  }