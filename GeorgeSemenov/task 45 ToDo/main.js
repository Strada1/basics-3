import list from './tasksList.js';
import addTask from './addTask.js';
import render from './render functions/render.js';
import renderTask from './render functions/renderTask.js';

const toDoList={
  list: list,
  render: render,
  addTask: addTask,
}

toDoList.render();

//Навешиваем на каждую форму слушателя, который будет с
//срабатывать при submit (создание задачи)
const forms = document.querySelectorAll('form');
forms.forEach((form, currentIndex, listObj)=>{
  const priority = form.dataset.priority;
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const taskText = form.querySelector('input.task-input').value;
    if(taskText){
      toDoList.addTask(taskText,'undone',priority)
      toDoList.render();
    }
  })
})