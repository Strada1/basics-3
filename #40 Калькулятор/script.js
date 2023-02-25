import ResultAppend from "./modules/ResultAppend.js";

const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const operator = document.querySelector('#selectOperator');
const output = document.querySelector('#outputResult');
const resultButton = document.querySelector('#resultButton');
const results = document.querySelector('.results');

resultButton.addEventListener('click', () => {

    let result = null;
    if (firstNum.value === '' && firstNum.value === '') {
        alert('Введите значения!');
        return
    }
    switch (operator.value) {
        case 'plus':
            result = Number(firstNum.value) + Number(secondNum.value);
            break
        case 'minus':
            result = Number(firstNum.value) - Number(secondNum.value);
            break
        case 'multiply':
            result = Number(firstNum.value) * Number(secondNum.value);
            break
        case 'divide':
            result = Number(firstNum.value) / Number(secondNum.value);
            break
    }
    output.textContent = result;
    ResultAppend(result, results);
})

results.addEventListener('click', e => {
    e.target.remove();
})
