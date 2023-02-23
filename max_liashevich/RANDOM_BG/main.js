'use strict';
const btn = document.querySelector('.btn');

const COLORS = ['#33006F', '#EE82EE', '#1E2420', '#506A8E', '#7CB9E8', '#97233F'];
let isToggle = false;
let idInterval;

function getRandomDigit() {
  return Math.floor(Math.random() * COLORS.length);
}

function getRandomColor() {
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = COLORS[getRandomDigit()];
  }, 2000);
}

btn.addEventListener('click', () => {
  isToggle = !isToggle;

  isToggle ? getRandomColor() : clearInterval(idInterval);
});