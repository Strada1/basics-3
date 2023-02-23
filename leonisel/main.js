
var button = document.getElementById('button');

let i = 0;
let j;
let timerId;

function showTime() {
  i += 1;
  console.log(i);
}

function startTimeSet() {
  j = 1;
  timerId = setInterval(showTime, 1000);
}

function stopTimeSet() {
  j = 0;
  clearInterval(timerId);
}

function clickButton() {
  if(j === 1) {
    stopTimeSet();
  } else {
    startTimeSet();
  }
}

button.addEventListener('click', clickButton);
