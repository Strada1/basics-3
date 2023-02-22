
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let name = document.querySelector('.name');
let timerInterval;


const buttonStart = document.getElementById('buttonStart');
const buttonStop = document.getElementById('buttonStop');
const buttonReset = document.getElementById('buttonReset');

function tick() {
    timerInterval = setInterval(function() {    
        const date = new Date();
        const time = date.getTime();   
        const second1 = Math.floor((time / 1000) % 60);
        const minute1 = Math.floor((time / 60000) % 60);
        const hour1 = Math.floor ((time / 3600000) % 24);
        
        hour.textContent = addNull(hour1);
        minute.textContent = addNull(minute1);
        second.textContent = addNull(second1);
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
    hour.textContent = '00';
    minute.textContent = '00';
    second.textContent = '00';
}

buttonStart.addEventListener('click', tick);
buttonStop.addEventListener('click', stop);
buttonReset.addEventListener('click', reset);







