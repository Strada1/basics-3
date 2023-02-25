
const firstNum = prompt('enter first number', '')
const secondNum = prompt('enter second number', '')
const operation = prompt('enter +, -, x, or /', '')

function calc(a, b, operation) {
 switch (operation) {
  case '+':
   const sum = Number(a) + Number(b)
   alert(sum);
   break;
  case '-':
   const subtract = Number(a) - Number(b)
   alert(subtract);
   break;

  case '*':
   const multiply = Number(a) * Number(b)
   alert(multipl);
   break;

  case '/':
   const division = (Number(b) === 0) ? 'error!!!' : a / b
   alert(division);
   break;

  default:
   alert('error! Choose from the suggested options')
   break;
 }
}
calc(firstNum, secondNum, operation)