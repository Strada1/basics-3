import list from './tasksList.js';
import addTask from './addTask.js';
import changeStatus from './changeStatus.js';
import deleteTask from './deleteTask.js';
import render from './render functions/render.js';
import renderTask from './render functions/renderTask.js';
import renderTasksContainer from './render functions/renderTasksContainer.js';

// throwAndShowError();

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

function throwAndShowError(){
  window.onerror = function(msg, url, line, col, err){
  console.log(`looks like there is error : ${err}

    it says that ${msg}

    caused by ${url}

    at line ${line} and column ${col}`);
}

throw new Error("error message");
}