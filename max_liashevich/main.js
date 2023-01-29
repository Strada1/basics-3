function calc(a, b, operation) {
  switch (operation) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    default:
      break;
  }
}

calc(8, 5, '*')


// -------CALC WITH SWITCH AND PROMPT--------
const operations = {
  sum: '+',
  min: '-',
  umn: '*',
  div: '/'
};

const firstNum = +prompt(`Enter first digit, please...`, ``);
const secNum = +prompt(`Enter second digit, please...`,``)
const operation = prompt(`What you wanna do with this?(+, -, *, /)`,``);

let result;

if(operation === operations.div && secNum === 0) {
  alert(`division on zero??)) lol!`)
} else {
  switch (operation) {
    case operations.sum:
      result = (firstNum + secNum);
      break;
    case operations.min:
      result = (firstNum - secNum);
      break;
    case operations.umn:
      result = (firstNum * secNum);
      break;
    case operations.div:
      result = (firstNum / secNum);
      break;
    default:
      alert('wtf?');
  }
}

alert(result);
const review = prompt('do you like it?', ``);
if(review === 'yes') {
  alert('Thank you so much, dear friend!');
} else {
  alert('Okay...and fuck you!');
}

