let strt = document.getElementById('startButton');
let outpt = document.getElementById('clock');
let tap = document.getElementById('tap');
let animate = document.getElementById('maindiv');


let clickFlag = 0;
let timerId = 0;
tap.innerText = 'Tap to Start';
let millisec = 0;
let sec = 0;
let min = 0;

function timerStarter() {
  
  let counter = 0;

  function timerDisplay () {

    counter++;
    millisec = counter;

      if(millisec === 100) {
        millisec = 0;
        sec++;
        counter = 0;
      };
      if(sec === 60) {
        sec = 0;
        min++;
      };
      let currentTime = `${min} : ${sec} : ${millisec}`;
      outpt.innerText = currentTime;
  };

  if (clickFlag === 0) {

    clickFlag = 1;
    tap.innerText = 'Tap to Stop';
    animate.classList.add('anim');
    animate.classList.remove('white');
    timerId = setInterval(
      function counter () {
        timerDisplay();
      }, 10);

  } else if (clickFlag === 1) {

    clickFlag = 2;
    tap.innerText = 'Tap to Clear';
    animate.classList.remove('anim');
    animate.classList.add('black');
    clearTimeout(timerId);

  } else if (clickFlag === 2) {

    clickFlag = 0;
    tap.innerText = 'Tap to Start';
    animate.classList.remove('black');
    animate.classList.add('white');
    clearTimeout(timerId);
    millisec = 0;
    sec = 0;
    min = 0;
    outpt.innerText = `0 : 0 : 0`

  }

};

strt.addEventListener('click', timerStarter);