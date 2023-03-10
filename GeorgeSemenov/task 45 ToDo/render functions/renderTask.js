import createAndSetClassName from './createAndSetClassName.js';

export default function renderTask(taskText,status="done",parentNode){
  let taskContainer = createAndSetClassName('div',status=="done"?'task task_completed': 'task');
  
  //Создаём чекбокс
  let checkboxWrapper = createAndSetClassName('div','checkbox-wrapper');
  let taskCompleteCheckbox = createAndSetClassName('input','task-complete-checkbox');
  taskCompleteCheckbox.type ="checkbox";
  taskCompleteCheckbox.name = "isCompleted";
  taskCompleteCheckbox.checked = (status == "done");
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

  parentNode.appendChild(taskContainer);
  return taskContainer;
}