const ask = require('./utils/ask');
let str = ask("enter string: ");

function showVertStr(str,amoutnOfLetters= 7,especialLetter='s'){
  str = str.slice(0,amoutnOfLetters);
  if (str[0] === especialLetter){str=str[0].toUpperCase() + str.slice(1)}
  for(let i=0; i<str.length; i++){
    console.log(str[i]);
  }
}

showVertStr(str);