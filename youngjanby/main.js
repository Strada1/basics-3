let hour = document.getElementById('timer-hour');
let minutes = document.getElementById('timer-minutes');
let seconds = document.getElementById('timer-seconds');
let button = document.getElementById('buttonForStartTimer')
let timerId
let Active = false

let currentHour = 0;
let currentMinutes = 0;
let currentSeconds = 0;

function startTimer() {
    button.textContent = 'STOP'
    timerId = setInterval(() => {
        currentSeconds++
        seconds.textContent = (`0${currentSeconds}`);
        minutes.textContent = (`0${currentMinutes}`);
        hour.textContent = (`0${currentHour}`); 

        if(currentSeconds === 60) {
            currentSeconds = 0;
            currentMinutes++
        }
        if(currentMinutes === 60) {
            currentMinutes = 0;
            currentHour++
        }

        if(currentHour > 9) {
            hour.textContent = currentHour;
        }
        if(currentSeconds > 9) {
            seconds.textContent = currentSeconds;
        }
        if(currentMinutes > 9) {
            minutes.textContent = currentMinutes;
        }
    }, 1000);
}

function stopTimer() {
        button.textContent = 'START'
        clearInterval(timerId);
        currentHour = 0;
        currentMinutes = 0;
        currentSeconds = 0;
        seconds.textContent = (`0${currentSeconds}`);
        minutes.textContent = (`0${currentMinutes}`);
        hour.textContent = (`0${currentHour}`); 
} 


button.addEventListener('click', () => {
    Active = !Active;
    Active ? startTimer() : stopTimer();
});


