//Задание (урок №23 Строки)

let capitalLetter = "s";
let numberOfLetters = 7;

function showVerticalMessage(str) {
  if (str[0] === capitalLetter) {
    str = (str[0].toUpperCase() + str.slice(1));
  } else {
    str;
  }

  for(let column of str.substr(0,numberOfLetters)) {
    console.log(column);
  }
}

showVerticalMessage("svoya igra");