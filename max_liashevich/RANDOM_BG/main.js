'use strict';
const btn = document.querySelector('.btn');

const COLORS = ['#33006F', '#EE82EE', '#1E2420', '#506A8E', '#7CB9E8', '#97233F'];
let isToggle = !true;
let isInterval;

function getRandomDigit() {
  return Math.floor(Math.random() * COLORS.length);
}

function randomBgColor() {
  isInterval = setInterval(() => {
    document.body.style.backgroundColor = COLORS[getRandomDigit()];
  }, 2000);
}

function stopChange() {
  clearInterval(isInterval)
  document.body.style.backgroundColor = 'salmon';   
}

btn.addEventListener('click', () => {
  isToggle = !isToggle

  isToggle ? randomBgColor() : stopChange();
});

//---------
function selectColor() {
  let color = document.getElementById('colorInput');
  // changing the background color
  document.body.style.backgroundColor = color.value;
}