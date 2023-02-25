const resultBtn = document.getElementById("resultBtn");


const calculator = function () {
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    const selectedOperation = document.getElementById("math-operation").value;
    let resultNum = document.getElementById("result");
    let result;

    if (selectedOperation === "+") {
        result = firstNumber + secondNumber;
        resultNum.textContent = result;
    }

    else if (selectedOperation === "-") {
        result = firstNumber - secondNumber;
        resultNum.textContent = result;
    }

    else if (selectedOperation === "/") {
        result = firstNumber / secondNumber;
        resultNum.textContent = result;
    }

    else if (selectedOperation === "*") {
        result = firstNumber * secondNumber;
        resultNum.textContent = result;
    }
}

resultBtn.addEventListener("click", calculator);