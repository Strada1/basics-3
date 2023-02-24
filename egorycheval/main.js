
const button = document.getElementById('button');
const pauseButton = document.getElementById('reset');

let i = 1;
let flag = false;
let timeId;

function showSecond() {
    if (flag === false) {
        timeId = setInterval(() => console.log(i++ + ' sec'), 1000);
        flag = true;
    } else if (flag === true) {
        pauseTime();

    }
}

function pauseTime() {
    flag = false;
    clearInterval(timeId);
}

function resetTime() {
    i = 1;
    pauseTime();
}


button.addEventListener('click', showSecond);
reset.addEventListener('click', resetTime);



