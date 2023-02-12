const STATUSES = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
}
  
const PRIORITIES = {
  LOW: 'Low',
  MIDDLE: 'Middle',
  HIGH: 'High'
}
  
const list = [
  {taskName: 'Eat any eat', taskStatus: STATUSES.TODO, taskPriority: PRIORITIES.MIDDLE},
  {taskName: 'Read a book', taskStatus: STATUSES.TODO, taskPriority: PRIORITIES.LOW}
];

function isValidTask(task) {
  return list.find(element => element.taskName === task);
}

function isValidStatus(status) {
  return status === STATUSES.TODO || status === STATUSES.IN_PROGRESS || status === STATUSES.DONE;
}

function isValidPriority(priority) {
  return priority === PRIORITIES.LOW || priority === PRIORITIES.MIDDLE || priority === PRIORITIES.HIGH;
}

function changeStatus(task, status) {
  if(isValidTask(task) && isValidStatus(status)) {
    const taskIndex = list.findIndex(element => element.taskName === task);
    return list[taskIndex].taskStatus = status;
  } else {
    console.log('Task or status is not in list.');
  } 
}
  
function changePriority(task, priority) {
  if(isValidTask(task) && isValidPriority(priority)) {
    const taskIndex = list.findIndex(element => element.taskName === task);
    return list[taskIndex].taskPriority = priority;
  } else {
    console.log('Task or priority is not in list.')
  }
}
  
function addTask(task) {
  list.push({taskName: task, taskStatus: STATUSES.TODO, taskPriority: PRIORITIES.LOW});
}
  
function deleteTask(task) {
  if (isValidTask(task)) {
    const taskIndex = list.findIndex(element => element.taskName === task);
    list.splice(taskIndex, 1);
  } else {
    console.log('Task is not in list.')
  }
}
  
function showList() {
  let isDone = false;
  for(let i = 0; i < list.length; i++) {
      if(list[i].taskStatus === STATUSES.DONE) {
        isDone = true;
      }
      console.log(`"${list[i].taskName}" is "${list[i].taskStatus}" - Priority - ${list[i].taskPriority}`);
  }
  if(!isDone) {
      console.log('Nothing is done!');
  }
}
  
addTask('Create a new practice task');
addTask('Make a bed');
addTask('Write a post');
addTask('Wash the clothes');
addTask('House cleaning');
addTask('Go to the gym');

deleteTask('Write a post');
  
changeStatus('Create a new practice task', STATUSES.IN_PROGRESS);
changeStatus('Make a bed', STATUSES.TODO);
changeStatus('Wash the clothes', STATUSES.IN_PROGRESS);
changeStatus('Go to the gym', STATUSES.IN_PROGRESS);
  
changePriority('Create a new practice task', PRIORITIES.HIGH);
changePriority('Go to the gym', PRIORITIES.HIGH);
changePriority('House cleaning', PRIORITIES.MIDDLE);
  
showList();