const firstNumber = document.getElementById('first_number');
const secondNumber = document.getElementById('second_number');
const sign = document.getElementById('sign');
const buttonEquals = document.getElementById('equals');
const valueConteiner = document.getElementById('value_conteiner');

let a = null;
let b = null;
let operation = null;



function calc(a, b, operation) {
    const isNotValid = (operation === undefined) || (a === undefined) || (b === undefined) ||
        (typeof (a) !== 'number') || (typeof (b) !== 'number');
    if (isNotValid) {
        return 'Error, try again!';
    }
    switch (operation) {
        case 'add':
            return +a + +b;
        case 'multy':
            return a * b;
        case 'sub':
            return a - b;
        case 'div':
            if (b === 0) {
                return 'Error';
            } else {
                return a / b;
            }
    }
}

buttonEquals.addEventListener('click', runCalc);


// function deleteDiv() {
//     newDiv.remove();
// }

function runCalc() {
    a = firstNumber.value;
    b = secondNumber.value;
    operation = sign.value;
    let result = calc(+a, +b, operation);


    let newDiv = document.createElement('div');
    newDiv.className = 'collum_div';
    newDiv.textContent = result;
    newDiv.addEventListener('click', function () { newDiv.remove() });
    valueConteiner.prepend(newDiv);

}