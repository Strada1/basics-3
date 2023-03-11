import list from './tasksList.js';
import addTask from './addTask.js';
import changeStatus from './changeStatus.js';
import deleteTask from './deleteTask.js';
import render from './render functions/render.js';
import renderTask from './render functions/renderTask.js';
import renderTasksContainer from './render functions/renderTasksContainer.js';

const toDoList={
  list: list,
  render: render,
  renderTask: renderTask,
  renderTasksContainer: renderTasksContainer,
  addTask: addTask,
  deleteTask: deleteTask,
  changeStatus: changeStatus,
  parentNode: document.getElementById('display'),
}
toDoList.render();