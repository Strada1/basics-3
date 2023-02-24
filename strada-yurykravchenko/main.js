let colorBtn = document.querySelector('.background');
let body = document.body;
let bodyColor = getComputedStyle(body).backgroundColor;
const colorBg = ['red', 'blue', 'green', 'orange'];

let isTogle = false;
let timerId = 0;

function changeBackgroundInterval () {
  timerId = setInterval(() => {
    if(body.style.background === bodyColor) {
      const randomIndex = colorBg[Math.floor(Math.random() * colorBg.length)];
      const randomColor = colorBg[randomIndex];
      document.body.style.backgroundColor = randomColor;
    }else {
      document.body.style.backgroundColor = bodyColor;
    }
  }, 2000);
}

function stopInterval() {
  clearInterval(timerId)
}

colorBtn.addEventListener('click', function() {
  isTogle = !isTogle;
  isTogle ? changeBackgroundInterval() : stopInterval();
})