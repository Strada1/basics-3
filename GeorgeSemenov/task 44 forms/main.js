const forms = document.querySelectorAll('form');
forms.forEach((form, currentIndex, listObj)=>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formParent = form.parentElement;
    const taskText = form.querySelector('input.task-input').value;
    if(taskText){
      const task = createTask(taskText);
      formParent.appendChild(task);
    }
  })
})

function createAndSetClassName(tagName,className){
  let createdNode = document.createElement(tagName);
  createdNode.className= className;
  return createdNode;
}

function createTask(taskText){
  let taskContainer = createAndSetClassName('div','task');
  
  //Создаём чекбокс
  let checkboxWrapper = createAndSetClassName('div','checkbox-wrapper');
  let taskCompleteCheckbox = createAndSetClassName('input','task-complete-checkbox');
  taskCompleteCheckbox.type ="checkbox";
  taskCompleteCheckbox.name = "isCompleted";
  checkboxWrapper.appendChild(taskCompleteCheckbox);
  taskContainer.appendChild(checkboxWrapper);
  
  //Создаём блок описания задачи
  let taskDescription = createAndSetClassName('p','task-description');
  taskDescription.textContent = taskText;
  taskContainer.appendChild(taskDescription);

  //Создаём кнопку закрытия задачи
  let terminateButtonWrapper = createAndSetClassName('div','terminate-button-wrapper');
  let terminateButton = createAndSetClassName('button','terminate-button');
  terminateButton.ariaLabel = "terminate task";
  terminateButtonWrapper.appendChild(terminateButton);
  taskContainer.appendChild(terminateButtonWrapper);

  return taskContainer;
}