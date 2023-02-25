/*
const timerButton = document.getElementById('timerButton')
const timerMinutes = document.getElementById('minutes')
const timerSeconds = document.getElementById('seconds')

let minutes = 0;
let seconds = 1;

function launchTimer() {
    timer = setInterval(() => {
        timerSeconds.textContent = seconds.toString().padStart(2, '0');
        timerMinutes.textContent = minutes.toString().padStart(2, '0');
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes === 60) {
            alert('Достигнут максимум времени');
            clearInterval(timer);
            seconds = 0;
            minutes = 0;
        }


    }, 1000)

};

timerButton.addEventListener('click', launchTimer)

*/



const firstNum = document.getElementById('numberOne');
const secondNum = document.getElementById('numberTwo');
const actSelect = document.querySelector('select');
const actResultButton = document.getElementById('result');
const actResult = document.getElementById('calcresult');

function calc() {
    if (actSelect.value === "+") {
        let actPlusResult = Number(firstNum.value) + Number(secondNum.value);
        return actResult.textContent = actPlusResult;
    } else if (actSelect.value === "-") {
        let actMinusResult = Number(firstNum.value) - Number(secondNum.value);
        return actResult.textContent = actMinusResult;
    } else if (actSelect.value === "*") {
        let actMultiResult = Number(firstNum.value) * Number(secondNum.value);
        return actResult.textContent = actMultiResult;
    } else if (actSelect.value === "/") {
        let actDivideResult = Number(firstNum.value) / Number(secondNum.value);
        return actResult.textContent = actDivideResult;
    }
}

actSelect.addEventListener('change', calc);
actResultButton.addEventListener('click', calc);