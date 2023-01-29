// --------SIMPLE__CALC__WITH__SWITCH-----------

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


// -------------SIMPLE__CALC__WITH__SWITCH__AND__PROMPT-----------------
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

// ----------fruit__choice__and__price__with__switch__and__prompt------------------

const expr = prompt(`What kind of fruit you wanna?`,``);

switch (expr) {
  case "Oranges":
    alert("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    alert("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    alert("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    alert("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    alert("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    alert("Sorry, we are out of " + expr + ".");
}

prompt("Is there anything else you'd like?",``);
