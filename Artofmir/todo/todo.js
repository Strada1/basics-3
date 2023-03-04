const buttn = document.getElementById('addhigh');
const highStrt = document.getElementById("highstart");

let inputData;


const clr = document.getElementById('addlow');



const removeDiv = (event, divNum) => {
  divNum.remove();
  event.preventDefault();
};

const clearTasks = (event) => {
  const parent = document.getElementById('high');
  let child = parent.querySelectorAll('.task');
  child.forEach(function(elem){
    elem.parentNode.removeChild(elem);
  });
  event.preventDefault();
};

function createTask(event, data) {

  
  const newDiv = document.createElement('div');
  newDiv.className = 'task';
  
  const newInput = document.createElement('input');
  newInput.setAttribute("type", "radio");
  
  const newTextDiv = document.createElement('div');
  newTextDiv.className = 'task-text';
  newTextDiv.textContent = data;
  
  const newButton = document.createElement('button');
  newButton.className = 'button';
  
  const newIcon = document.createElement('ion-icon');
  newIcon.className = 'scale';
  newIcon.setAttribute("name", "close-outline");
  
  highStrt.after(newDiv);
  newDiv.insertAdjacentElement('afterbegin', newInput);
  newInput.after(newTextDiv);
  newTextDiv.after(newButton);
  newButton.insertAdjacentElement('afterbegin', newIcon);

  newButton.addEventListener('click', function (e) {
    e.stopPropagation();
    removeDiv(newDiv);
  });

  document.getElementById('todohigh').value = "";

  event.preventDefault();
};

buttn.addEventListener('click', function() {
  inputData = document.getElementById('todohigh').value;
  createTask('click', inputData);
});


clr.addEventListener('click', function() {
  clearTasks();
});