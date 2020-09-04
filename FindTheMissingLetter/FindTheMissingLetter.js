function findMissingLetter(array)
{
    let previousLetter = parseInt(array[0].toUpperCase(), 36) - 9;
    let returnLetter = '';

    for (letter of array) {
        let letterNr = (parseInt(letter.toUpperCase(), 36) - 9);

        if (letterNr - previousLetter > 1) {
            returnLetter = String.fromCharCode(previousLetter + 1 + 64);
            if (array[0] === array[0].toLowerCase()) {
                returnLetter = returnLetter.toLowerCase();
            } 
            break;
        } else {
            previousLetter = letterNr;
        }
    }

  return returnLetter;
}