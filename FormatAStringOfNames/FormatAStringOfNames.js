function list(names){
    let len = names.length;
    let namesList = '';

    for (let i = 0; i < len; i++) {
        namesList += names[i].name;
        if (len - i === 2) {
            namesList += " & ";
        } else if (len - i > 2) {
            namesList += ", ";
        }
    }

    return namesList;
  }