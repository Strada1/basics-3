import createAndSetClassName from './createAndSetClassName.js';

export default function renderTasksContainer(title,tasks,placeholder = "Добавить",parentNode=document.getElementById('display')){
  let tasksContainer = createAndSetClassName('div','tasks-container');
  
  //создаём заголовок
  let priorityNameContainer = createAndSetClassName('h1','priority-name');
  priorityNameContainer.textContent = title;
  tasksContainer.appendChild(priorityNameContainer)

  //создаём форму
  const taskInputWrapper = createAndSetClassName('form','task-input-wrapper');
  taskInputWrapper.dataset.priority = title;
  const taskInput = createAndSetClassName('input','task-input');
  taskInput.type = 'text';
  taskInput.name = 'task-description';
  taskInput.placeholder = placeholder;
  taskInputWrapper.appendChild(taskInput)
  const addTaskButton = createAndSetClassName('button','add-task-button');
  taskInputWrapper.appendChild(addTaskButton);
  tasksContainer.appendChild(taskInputWrapper);

  parentNode.appendChild(tasksContainer);
  return tasksContainer;  
}