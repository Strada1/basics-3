import { testArray } from "./testArray.js";
import { createTask} from "./todo.js";
import { clearAllTasks } from "./clear.js";
import { highStrt, lowStrt, PRIORITYS, STATUSES} from "./consts.js";
export {deleteTask, writeTask, writeStatus, render};


const findIndex = (indexName) => {
  return testArray.findIndex(x => x.name == indexName); 
};

const writeStatus = (taskName, newTaskStatus, newTaskPriority) => {

  let idx = findIndex(taskName);   

  if (idx >= 0) {
    testArray[idx] = {name : taskName, status : newTaskStatus, priority : newTaskPriority};
  } else {
    console.log(`не изменён - нет в списке!`);
  };
  console.log(testArray);
};

const writeTask = (newTaskName, newPriority) => {
  
  if (newTaskName === "") {

  console.log('Вы ничего не ввели!');

  } else {

    let idx = findIndex(newTaskName);   

    if (idx >= 0) {
      console.log('Такая задача уже есть!');
    } else {  
      testArray.push({name : newTaskName, status : STATUSES.TODO, priority : newPriority});
    };
  };
  console.log(testArray);
};

const deleteTask = (taskName) => {

  let idx = findIndex(taskName);     

  if (idx >= 0) {
    testArray.splice(idx, 1);
  
  } else {
    console.log(`Не удалено: нет в списке!`);
  };
  console.log(testArray);
};


  function filteredStatuses(testArray, selected, newPriority) {

    const toDo = testArray.filter(todo => todo.priority === newPriority);
  
    if (toDo.length > 0) {
      for (const all of toDo) {
        const data = all.name;
        const stat = all.status;
        createTask(data, stat, selected);
      };
    } else {
      console.log(' - ');
    };
  };
  
  const render = () => {
    clearAllTasks();
    filteredStatuses(testArray, highStrt, PRIORITYS.HIGH);
    filteredStatuses(testArray, lowStrt, PRIORITYS.LOW);
  };
  
render();



