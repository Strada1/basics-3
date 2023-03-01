import {STATUSES, list} from './constObjects.js'
function changeStatus(uniqId, newStatus){
  const tasks = list.find(tasks => tasks.uniqId === uniqId);
  const lastStatus = tasks.status;
  tasks.status = newStatus;
}
function addTask(task, priority){
  const defaultStatus = STATUSES.TO_DO;
  let uniqId = createUniqId();
  list.push({name: task, status: defaultStatus, priority: priority, uniqId: uniqId});
}
  function deleteTask(uniqId){
  const taskIndex = list.findIndex(tasksIndex => tasksIndex.uniqId === uniqId);
  const countDeletedElem = 1;
  list.splice(taskIndex,countDeletedElem)
}
function createUniqId(){
  let uniqId = randomNumber();
  while(list.find(uniqsId => uniqsId.uniqId === uniqId)){
    uniqId = randomNumber();
  }
  return uniqId;
}
function randomNumber(){
  return Math.floor(Math.random() * (500 - 0 + 1)) + 0;
}
export {changeStatus, addTask, deleteTask};