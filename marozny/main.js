let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let operations = document.getElementById('operations');
let calculation = document.getElementById('calculation');
let result = document.getElementById('result');

function go() {
switch (operations.options[operations.selectedIndex].text) {
    case '+': 
   plus();
    break;
    case '-': 
    minus();
    break;
    case '*': 
    multi();
    break;
    case '/': 
    divide();
    break;
}
}

function plus() {
    result.textContent = Number(firstNumber.value) + Number(secondNumber.value);
}
function minus() {
    result.textContent = Number(firstNumber.value) - Number(secondNumber.value);
}
function multi() {
    result.textContent = Number(firstNumber.value) * Number(secondNumber.value);
}
function divide() {
    result.textContent = Number(firstNumber.value) / Number(secondNumber.value);
}

calculation.addEventListener('click', go);