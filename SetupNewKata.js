const readline = require('readline');
const fetch = require('node-fetch');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var kataId = '';
var title = '';

rl.question('Please enter Kata-ID: ', (answer) => {
  kataId = answer;
  fetch('https://www.codewars.com/api/v1/code-challenges/' + answer)
  .then(res => res.json())
  .then(json => {
      title = json.name;
      console.log(title);


    })
    

  rl.close();
});



