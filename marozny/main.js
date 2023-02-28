import { firstNumber, secondNumber, operations, result, resultShow, calculation } from "./constants.js";

calculation.addEventListener('click', function (){
    const newDiv = document.createElement('div');
    switch (operations.value) {
        case '+': 
        result.innerHTML = Number(firstNumber.value) + Number(secondNumber.value);
        newDiv.textContent = result.innerHTML;
        resultShow.appendChild(newDiv);
        break;
        case '-': 
        result.innerHTML = Number(firstNumber.value) - Number(secondNumber.value);
        newDiv.textContent = result.innerHTML;
        resultShow.appendChild(newDiv);
        break;
        case '*': 
        result.innerHTML = Number(firstNumber.value) * Number(secondNumber.value);
        newDiv.textContent = result.innerHTML;
        resultShow.appendChild(newDiv);
        break;
        case '/': 
        result.innerHTML = Number(firstNumber.value) / Number(secondNumber.value);
        newDiv.textContent = result.innerHTML;
        resultShow.appendChild(newDiv);
        break;
    }
    newDiv.addEventListener('click', function (){
        newDiv.remove();
        newDiv.removeEventListener;
    });
});
