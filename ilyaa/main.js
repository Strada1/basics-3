let begin = document.getElementById('begin');
let prevent = document.getElementById('pause');
let restart = document.getElementById('restart');
let seconds = 0;
let minutes = 0;
let hours = 0;

let stopwatch = function() {
    timerId = setInterval(()=> {
    seconds++;
    if  (seconds === 60) {  
        minutes++;
        seconds = 0;
    } if (minutes === 60) {
        hours++;
        mibutes = 60;
    }
    console.log(seconds, minutes, hours);
}, 1000);
};


let stopInterval = () => clearInterval(timerId);

let restarting = function() {
    seconds = 0;
    minutes = 0;
    hours = 0;

}
begin.addEventListener('click', stopwatch);
prevent.addEventListener('click', stopInterval);
restart.addEventListener('click', restarting);