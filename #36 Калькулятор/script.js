let firstNum = document.querySelector('#firstNum');
let secondNum = document.querySelector('#secondNum');
let operator = document.querySelector('#selectOperator');
let output = document.querySelector('#outputResult');
let resultButton = document.querySelector('#resultButton');

resultButton.addEventListener('click', () => {
    if (firstNum.value === '' && firstNum.value === '') {
        alert('Введите значения!');
        return
    }
    switch(operator.value) {
        case 'plus':
            output.textContent = Number(firstNum.value) + Number(secondNum.value);
            break
        case 'minus':
            output.textContent = Number(firstNum.value) - Number(secondNum.value);
            break
        case 'multiply':
            output.textContent = Number(firstNum.value) * Number(secondNum.value);
            break
        case 'divide':
            output.textContent = Number(firstNum.value) / Number(secondNum.value);
            break
    }
})

