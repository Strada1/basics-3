const resultBtn = document.getElementById("resultBtn");
const results = document.querySelector(".results");

const calculator = function () {
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
};

const deleteResult = function (event) {
    results.removeChild(event.target);
};


results.addEventListener("click", deleteResult);
resultBtn.addEventListener("click", calculator);
