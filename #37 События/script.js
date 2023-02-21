const button = document.querySelector('#buttonTimer');
const outputHours = document.querySelector('#hours');
const outputMinutes = document.querySelector('#minutes');
const outputSeconds = document.querySelector('#seconds');

let isActive = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function start() {
    timer = setInterval(() => {
        outputHours.textContent = hours.toString().padStart(2, '0');
        outputMinutes.textContent = minutes.toString().padStart(2, '0');
        outputSeconds.textContent = seconds.toString().padStart(2, '0');
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0;
            seconds = 0;
        }
    }, 1000);
};


function stop() {
    clearInterval(timer);
};

button.addEventListener('click', () => {
    isActive = !isActive;
    isActive ? start() : stop();
});
