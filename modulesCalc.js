import { SaveDelResult } from "./moduleSaveDelResult.js";
import { button, firstNumber, secondNumber, operation, resultText } from "./moduleConstant.js";
function calcResult() {
    let valueFirstNumber = firstNumber.value;
    let valueSecondNumber = secondNumber.value;
    let valueOperation = operation.value;
    let result;
    if (valueOperation === '/' & valueSecondNumber === '0') {
        resultText.textContent = 'Division by zero!';
        return
    }
    if (valueOperation === '/' & valueSecondNumber === '-0') {
        resultText.textContent = 'Division by zero!';
        return
    }
    else {
        switch (valueOperation) {
            case "+":
                result = +valueFirstNumber + +valueSecondNumber;
                resultText.textContent = +result.toFixed(5);
                break;
            case "*":
                result = +valueFirstNumber * +valueSecondNumber;
                resultText.textContent = +result.toFixed(5);
                break;
            case "-":
                result = +valueFirstNumber - +valueSecondNumber;
                resultText.textContent = +result.toFixed(5);
                break;
            case "/":
                result = +valueFirstNumber / +valueSecondNumber;
                resultText.textContent = +result.toFixed(5);
                break;
        }
    }
    SaveDelResult();
}
button.addEventListener("click", calcResult);
