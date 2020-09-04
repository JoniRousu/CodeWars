function rot13(message){
    let splitMessage = message.split('');
    let letterCase = [];
    let encryptedMessage = '';
    let i = 0;

    for (letter of splitMessage) {
        letterCase.push(letter === letter.toLowerCase());

        if(!(letter.toLowerCase() != letter.toUpperCase())) {
            encryptedMessage += letter;
            i++;
            continue;
        }

        let letterNr = (parseInt(letter.toUpperCase(), 36) - 9);

        if(letterNr + 13 > 26) {
            letterNr = letterNr-26;
        }
        
        if (letterCase[i++]) {
            encryptedMessage += String.fromCharCode(letterNr + 13 + 64).toLowerCase();
        } else {
            encryptedMessage += String.fromCharCode(letterNr + 13 + 64);
        }
    }

    return encryptedMessage;
  }