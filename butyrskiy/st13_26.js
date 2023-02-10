const STATUS = {
  TODO: 'Todo',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
}

const PRIORITY = {
  NO_PRIORITY: 'No priority',
  LOW: 'Low',
  MIDDLE: 'Middle',
  HIGH: 'High',
}

const list = [];

const checkKit = {
  checkName(taskName) {
    if(typeof(taskName) != 'string') {
      return console.error(`Error name - «${taskName}»`);
    } else return true;
  },
  checkStatus(statusName) {
    for(const prop in STATUS) {
      if(STATUS[prop] === statusName) 
      return true;
    }
  },
  checkPriority(priorityName) {
    for(const prop in PRIORITY) {
      if(PRIORITY[prop] === priorityName) 
      return true;
    }
  }
}


function addTask(taskName) {
  if(checkKit.checkName(taskName)) {
    list.push({name: taskName, status: STATUS.TODO, prority: PRIORITY.NO_PRIORITY});}
}

function deleteTask(taskName) {
  const indexElement = list.findIndex(element => element.name === taskName);
  list.splice(indexElement, 1);
}

function changeStatus(taskName, statusName) {
  const indexElement = list.findIndex(element => element.name === taskName);
  if(checkKit.checkStatus(statusName)) {
    list[indexElement].status = statusName;
  } else console.log(`Status name - «${statusName}» was not found!`)
}

function changePriority(taskName, priorityName) {
  const indexElement = list.findIndex(element => element.name === taskName);
  if(checkKit.checkPriority(priorityName)) {
    list[indexElement].prority = priorityName;
  } else console.log(`Priority name - «${priorityName}» was not found!`)
}

function showTask() {
  for(let i = 0; i < list.length; i++) {
    console.log(`Task «${list[i].name}». STATUS: «${list[i].status}». PRIORITY: ${list[i].prority}`);
  }
}


addTask('Walk a dog');
addTask('Write a post');
addTask('Open the door');
addTask('Listen to music');
addTask('Watch the movie');

deleteTask('Walk a dog');

changeStatus('Write a post', STATUS.IN_PROGRESS);
changeStatus('Open the door', STATUS.DONE);
changeStatus('Listen to music', STATUS.IN_PROGRESS);

changePriority('Write a post', PRIORITY.HIGH);
changePriority('Open the door', PRIORITY.LOW);
changePriority('Listen to music', PRIORITY.MIDDLE);

showTask();


// console.log(list);