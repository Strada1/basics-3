import { ifError } from "./errors.js";

const equal = document.getElementById('equal');
export const output = document.getElementById('output');

const saveOutput = document.querySelector('.save-output');
equal.addEventListener('click', calc);

export function saveResult() {
    const clonedOutput = output.cloneNode(true);
    saveOutput.insertAdjacentElement('afterbegin', clonedOutput);
    clonedOutput.addEventListener('click', clonedOutput.remove);
}

function calc() {
    const a = document.getElementById('numberA').value;
    const b = document.getElementById('numberB').value;
    const operation = document.getElementById('select').value;

    if (ifError(a, b)) {
        return;
    } else {
        let result;
        switch (operation) {
            case 'add':
                result = +a + +b;
                break;
            case 'multi':
                result = a * b;
                break;
            case 'subtract':
                result = a - b;
                break;
            case 'divide':
                if (+b === 0) { ifError() }
                else {
                    result = a / b;
                    break;
                }
        }
        output.textContent = result.toFixed(2);
        saveResult();
    }
}

