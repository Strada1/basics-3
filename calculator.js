import { results } from "./main.js";
export const calculator = function () {
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    const selectedOperation = document.getElementById("math-operation").value;
    let resultNum = document.getElementById("result");
    let result;

    if (selectedOperation === "+") {
        result = firstNumber + secondNumber;
    }

    else if (selectedOperation === "-") {
        result = firstNumber - secondNumber;
    }

    else if (selectedOperation === "/") {
        result = firstNumber / secondNumber;
    }

    else if (selectedOperation === "*") {
        result = firstNumber * secondNumber;
    }

    resultNum.textContent = result;
    let resultDiv = results.insertAdjacentHTML('afterbegin', `<div id="calcResult">${result}</div>`);
}


