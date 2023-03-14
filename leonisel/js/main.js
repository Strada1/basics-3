const templateContainer = document.querySelector('.container');
const firstTemplate = document.querySelector('#first-template');
const secondTemplate = document.querySelector('#second-template');
const thirdTemplate = document.querySelector('#third-template');
const screenSwitchButtons = document.querySelectorAll('.box1-low_children');
const cloneFirst = firstTemplate.content.cloneNode(true);
const cloneSecond = secondTemplate.content.cloneNode(true);
const cloneThird = thirdTemplate.content.cloneNode(true);

const putFirstTemplate = templateContainer.appendChild(cloneFirst);

console.log(screenSwitchButtons);

for(let button of screenSwitchButtons) {
  button.addEventListener('click', function(){
    console.log('Hello');
  });
}

// const putSecondTemplate = templateContainer.appendChild(cloneSecond);
// const putThirdTemplate = templateContainer.appendChild(cloneThird);

// function switchScreen(event) {
//   console.log(event.target)
// }

// function clickScreenSwitchButtons() {

//   for(let button of screenSwitchButtons) {
//     button.addEventListener('click', switchScreen);
//   }
// }
// clickScreenSwitchButtons(screenSwitchButtons);

