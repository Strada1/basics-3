const timer = {
    hour: document.querySelector('#hour'),
    minute: document.querySelector('#minute'),
    second: document.querySelector('#second')
}

const buttons = {
    buttonStart: document.querySelector('#buttonStart'),
    buttonStop: document.querySelector('#buttonStop'),
    buttonReset: document.querySelector('#buttonReset')
}

let timerInterval;

buttons.buttonStart.addEventListener('click', tick);
buttons.buttonStop.addEventListener('click', stop);
buttons.buttonReset.addEventListener('click', reset);

function tick() {
    timerInterval = setInterval(function() {
        const dateNow = new Date();
        const timeNow = dateNow.getTime();
        const seconds = Math.floor((timeNow / 1000) % 60);
        const minutes = Math.floor((timeNow / 60000) % 60);
        const hours = Math.floor((timeNow / 3600000) % 24);
        timer.hour.textContent = addNull(hours);
        timer.minute.textContent = addNull(minutes);
        timer.second.textContent = addNull(seconds);
    }, 1000)
}

function addNull(item) {
    return item < 10 ? '0' + item : item;
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    stop();
    timer.hour.textContent = '00';
    timer.minute.textContent = '00';
    timer.second.textContent = '00';
}

