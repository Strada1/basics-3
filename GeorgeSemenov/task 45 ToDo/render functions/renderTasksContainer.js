import createAndSetClassName from './createAndSetClassName.js';

export default function renderTasksContainer({title,placeholder}){
  placeholder = placeholder? placeholder: "Добавить";
  let tasksContainer = createAndSetClassName('div','tasks-container');
  
  //создаём заголовок
  let priorityNameContainer = createAndSetClassName('h1','priority-name');
  priorityNameContainer.textContent = title;
  tasksContainer.appendChild(priorityNameContainer)

  //создаём форму
  const taskInputWrapper = createAndSetClassName('form','task-input-wrapper');
  taskInputWrapper.addEventListener('submit',(e)=>{onSubmit(e,taskInputWrapper,this)});
  taskInputWrapper.dataset.priority = title;
  const taskInput = createAndSetClassName('input','task-input');
  taskInput.type = 'text';
  taskInput.name = 'task-description';
  taskInput.placeholder = placeholder;
  taskInputWrapper.appendChild(taskInput)
  const addTaskButton = createAndSetClassName('button','add-task-button');
  taskInputWrapper.appendChild(addTaskButton);
  tasksContainer.appendChild(taskInputWrapper);

  this.parentNode.appendChild(tasksContainer);
  return tasksContainer;  
}

function onSubmit(e,form,toDoList){
    e.preventDefault();
    const priority = form.dataset.priority;
    const taskText = form.querySelector('input.task-input').value;
    if(taskText){
      toDoList.addTask(taskText,'undone',priority)
      toDoList.render();
    }
}