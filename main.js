const form = document.querySelector('.enterForm');
const formTwo = document.querySelector('.enterFormTwo');
const textInInputEnter = document.querySelector('.enter');
const textInInputEnterTwo = document.querySelector('.enterTwo');
const checkOneBLock = document.querySelector('.oneBlock');
const checkTwoBLock = document.querySelector('.twoBlock');
const newAddTaskHigh = document.createElement('div');

function funcNewAddTaskHigh(form){
	form.preventDefault();
	checkOneBLock.insertAdjacentHTML('beforeend', `<div class = 'addTask'><div class='taskCheckbox'><input class='taskCheckbox' type='checkbox'></div><div class='text'>${textInInputEnter.value}</div><div class='buttonDel'></div></div>`);
}

function funcNewAddTaskLow(formTwo){
	formTwo.preventDefault();
	checkTwoBLock.insertAdjacentHTML('beforeend', `<div class = 'addTask'><div class='taskCheckbox'><input class='taskCheckbox' type='checkbox'></div><div class='text'>${textInInputEnterTwo.value}</div><div class='buttonDel'></div></div>`);
}

form.addEventListener('submit', funcNewAddTaskHigh)
formTwo.addEventListener('submit', funcNewAddTaskLow)
