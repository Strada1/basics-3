import {calc} from './calc.js';

let operation;
let a;
let b;
let result = 0;
document.getElementById('result').textContent = result;
let button = document.getElementById('button');
let elementsStory = [];

function buttonClickHandler() {
    operation = document.querySelector('#selectId > option:checked').value;
    a = Number(document.getElementById('operandFirst').value);
    b = Number(document.getElementById('operandSecond').value);
    result = calc(operation, a, b);
    document.getElementById('result').textContent = result;
    addStoryDiv(result);
    elementsStory = document.querySelectorAll('.story');
    delStoryDiv();
}

button.addEventListener('click', buttonClickHandler);

function addStoryDiv(result){
    const newDiv = document.createElement('div');
    newDiv.textContent = result;
    newDiv.className = 'story';
    const previousElement = document.querySelector('#result');
    previousElement.after(newDiv);
}

function delStoryDiv(){
elementsStory.forEach(item => {
    item.addEventListener('click', e => {
    e.target.remove();
    });
  });
};
