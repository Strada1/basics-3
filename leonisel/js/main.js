import {getDataInputSubmit} from './modules/uiNow.js';
import {form} from './modules/domElements.js';

getDataInputSubmit(form);

// const screenSwitchButtons = document.querySelectorAll('.box1-low_children');
// const templateContainer = document.querySelector('.container');
// const firstTemplate = document.querySelector('#first-template');
// const secondTemplate = document.querySelector('#second-template');
// const thirdTemplate = document.querySelector('#third-template');

// const cloneFirst = firstTemplate.content.cloneNode(true);
// const cloneSecond = secondTemplate.content.cloneNode(true);
// const cloneThird = thirdTemplate.content.cloneNode(true);

// const putFirstTemplate = templateContainer.appendChild(cloneFirst);
// const putSecondTemplate = templateContainer.appendChild(cloneSecond);
// const putThirdTemplate = templateContainer.appendChild(cloneThird);

// console.log(screenSwitchButtons);
// for(let button of screenSwitchButtons) {
//   button.addEventListener('click', function(){
//     console.log('Hello');
//   });
// }

// function switchScreen(event) {
//   console.log(event.target)
// }

// function clickScreenSwitchButtons() {

//   for(let button of screenSwitchButtons) {
//     button.addEventListener('click', switchScreen);
//   }
// }
// clickScreenSwitchButtons(screenSwitchButtons);



