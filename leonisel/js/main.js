const buttonEqual = document.getElementById('button-equal');
const inputs = document.querySelectorAll('.input-wrapper_window');
const select = document.querySelectorAll('.select');
const resultEqual = document.getElementById('result');
const output = document.querySelector('.output');

let leftInputValue;
let rightInputValue;
let operator;

function calc(operation, a, b) {
  if(!isFinite(a) || !isFinite(b) || a === '' || b === '') {
    return 'введите число';
  }
  if(operation === 'division' && b === 0) {
    return 'на 0 делить нельзя';
  }
  if(!operation) {
    return 'выберите оператора';
  }
  const aNum = Number(a);
  const bNum = Number(b);

  switch(operation) {
    case 'add':
      return aNum + bNum;
    case 'multi':
      return aNum * bNum;
    case 'subtract':
      return aNum - bNum;
    case 'division':
      return aNum / bNum;
  }
}

function getInput(e) {
  if(e.target.id == 'input-left') {
    leftInputValue = +e.target.value;
  }
  if(e.target.id == 'input-right') {
    rightInputValue = +e.target.value; 
  }
}

function getOperator(e) {
  switch(e.target.value){
    case '+':
      operator = 'add';
      break;
    case '-':
      operator = 'subtract';
      break;
    case '*':
      operator = 'multi';
      break;
    case '/':
      operator = 'division';
      break;      
  }
}

function getOutput(num) {
  const newOutput = document.createElement('div');
  newOutput.classList.add('output-items');
  output.prepend(newOutput);
  newOutput.textContent = num;
}

function getEqual() {
  const result = calc(operator, leftInputValue, rightInputValue);
  resultEqual.textContent = result;
  getOutput(result);
}

for (const input of inputs) {
  input.addEventListener('input', getInput);
}

for (const option of select) {
  option.addEventListener('change', getOperator);
}

buttonEqual.addEventListener('click', getEqual);

output.addEventListener('click', function(event){
  let target = event.target;
  if(target.classList.contains('output-items')) {
    target.remove();
  }
});