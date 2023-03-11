import createAndSetClassName from './createAndSetClassName.js';

export default function renderTask(taskItself, parentNode){
  let taskContainer = createAndSetClassName('div',taskItself.status=="done"?'task task_completed': 'task');
  
  //Создаём чекбокс
  let checkboxWrapper = createAndSetClassName('div','checkbox-wrapper');
  let taskCompleteCheckbox = createAndSetClassName('input','task-complete-checkbox');
  taskCompleteCheckbox.type ="checkbox";
  taskCompleteCheckbox.name = "isCompleted";
  taskCompleteCheckbox.checked = (taskItself.status == "done");
  taskCompleteCheckbox.addEventListener('change',()=>{
    this.changeStatus(taskItself.name,(taskItself.status == "done")?'In progress': 'done'),
    this.render();
  });
  checkboxWrapper.appendChild(taskCompleteCheckbox);
  taskContainer.appendChild(checkboxWrapper);
  
  //Создаём блок описания задачи
  let taskDescription = createAndSetClassName('p','task-description');
  taskDescription.textContent = taskItself.name;
  taskContainer.appendChild(taskDescription);

  //Создаём кнопку закрытия задачи
  let terminateButtonWrapper = createAndSetClassName('div','terminate-button-wrapper');
  let terminateButton = createAndSetClassName('button','terminate-button');
  terminateButton.addEventListener('click',()=>{
    this.deleteTask(taskItself.name);
    this.render();
  })
  terminateButton.ariaLabel = "terminate task";
  terminateButtonWrapper.appendChild(terminateButton);
  taskContainer.appendChild(terminateButtonWrapper);

  parentNode.appendChild(taskContainer);
  return taskContainer;
}

