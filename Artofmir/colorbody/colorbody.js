const colors = ['navy', 'violet', 'purple', 'teal', 'coral'];

let buttonZero = document.getElementById('color0');
let buttonOne = document.getElementById('color1');
let buttonTwo = document.querySelector('#color2');
let buttonThree = document.querySelector('#color3');
let buttonDefault = document.body;
let timerId;

startRandom = () => {
  timerId = setInterval(
    function counter () {
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        buttonDefault.style.backgroundColor = randomColor;
    }, 2500);
    console.log(timerId);
};

changecolor = (buttonName) => {
  newBodyColor = buttonName.getAttribute('data-color');
  buttonDefault.classList.add('reset-color');
  buttonDefault.style.backgroundColor = newBodyColor;
  console.log(timerId);
};

buttonOne.addEventListener('click',function(e) {
  e.stopPropagation();
  clearInterval(timerId);
  changecolor(buttonOne);
  console.log(timerId);
});
buttonTwo.addEventListener('click',function(e) {
  e.stopPropagation();
  clearInterval(timerId);
  changecolor(buttonTwo);
});
buttonThree.addEventListener('click',function(e) {
  e.stopPropagation();
  clearInterval(timerId);
  changecolor(buttonThree);
});
buttonZero.addEventListener('click',function(e) {
  clearInterval(timerId);
  startRandom();
  e.stopPropagation();
  changecolor(buttonZero);
});
buttonDefault.addEventListener('click',function() {
  clearInterval(timerId);
  buttonDefault.classList.remove('reset-color');
  document.body.style.removeProperty('background-color');
});