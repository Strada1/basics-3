const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const button = document.querySelector('.button');



//Переменные 
let hours = 00;
let minutes = 00;
let seconds = 00;
let interval
let isActive = false;


function startTimer(){
    interval = setInterval ( () => {
        seconds++
        if (seconds < 9) {
            secondsElement.innerText = '0' + seconds
        }
        if (seconds > 9) {
            secondsElement.innerText = seconds
        }
        if (seconds > 59) {
            minutes++
            // minutesElement.innerText = '0' + minutes
            seconds = 0
            secondsElement.innerText = '0' + seconds
        }

        // Минуты
        if (minutes < 9) {
            minutesElement.innerText = '0' + minutes
        }
        if (minutes > 9) {
            minutesElement.innerText = minutes
        }
        if (minutes > 59) {
            hours++
            // hoursElement.innerText = '0' + hours
            minutes = 0
            minutesElement.innerText = '0' + minutes
        }

        //Часы
        if (hours < 9) {
            hoursElement.innerText = '0' + hours
        }
        if (hours > 9) {
            hoursElement.innerText = hours
        }
        if (hours > 59) {
            seconds = 0
        }
} ,1000);
}

function stopTimer () {
    clearInterval (interval)
}

button.addEventListener ('click', () => {
    isActive = !isActive;
    isActive ? startTimer() : stopTimer ();
})