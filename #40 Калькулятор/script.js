import ResultAppend from "./modules/ResultAppend.js";
import Calculate from "./modules/Calculate.js";

const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const operator = document.querySelector('#selectOperator');
const output = document.querySelector('#outputResult');
const resultButton = document.querySelector('#resultButton');
const results = document.querySelector('.results');

resultButton.addEventListener('click', () => {

    let a = Number(firstNum.value);
    let b = Number(secondNum.value);
    let oper = operator.value;

    if (a === 0 || b === 0) return

    let result = Calculate(a, b, oper);

    output.textContent = result;
    ResultAppend(result, results);
})

results.addEventListener('click', e => {
    if (e.target.classList.contains('result')) e.target.remove();
})
