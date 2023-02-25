import calculate from './calculate.js'

function distributor() {
    const leftInputValue = Number(document.querySelector('.calc__input--left').value);
    const rightInputValue = Number(document.querySelector('.calc__input--right').value);
    const operatorValue = document.querySelector('.calc__select').value;
    switch (isNumber(leftInputValue, rightInputValue)) {
        case true:
            createNewDiv(calculate(leftInputValue, rightInputValue, operatorValue));
            break;
        case false:
            alert('Ошибка ввода')
            break;
    }
}

function isNumber(valueOne, valueTwo){
    if (!isNaN(valueOne) && !isNaN(valueTwo)) {
        return true;
    } else {
        return false;
    }
}

function createNewDiv(calculatedNumber) {
    switch(isFinite(calculatedNumber)) {
        case true:
            const resultChild = document.createElement('div');
            const resultParent = document.querySelector('.result');
            resultChild.textContent = calculatedNumber;
            resultChild.addEventListener('click', () => resultChild.remove())
            resultParent.insertBefore(resultChild, resultParent.firstChild);
            break;
        case false:
            alert('Ты такие вещи сюда не пиши');
            break;
    }
}

const button = document.querySelector('.calc__button');
button.addEventListener('click', distributor);