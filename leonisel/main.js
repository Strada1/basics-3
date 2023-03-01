const STATUS = {
  PROGRESS: 'In Progress',
  DONE: 'Done',
  TODO: 'To Do'
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high'
}

const list = [
 {name: 'check habit tracker', status: 'To Do', priority: 'low'},
 {name: 'review students code', status: 'In Progress', priority: 'high'},
 {name: 'make the bed', status: 'Done', priority: 'low'}
];

const isValidTask = (task) => {
  return list.find(elem => elem.name === task);
}

const isValidStatus = (status) => {
  return STATUS.TODO === status || STATUS.PROGRESS === status || STATUS.DONE === status;
}
const isValidPriority = (priority) => {
  return PRIORITY.LOW === priority || PRIORITY.HIGH === priority;
}

function sortArray() {
    list.sort((a, b) => {
      let aUpperCase = a.name.toUpperCase();
      let bUpperCase = b.name.toUpperCase();
      return (aUpperCase < bUpperCase) ? -1 : (aUpperCase > bUpperCase) ? 1 : 0;
    })
}

const addTask = (taskName, userStatus = STATUS.TODO, userPriority = PRIORITY.LOW) => {
  let template = {};
  if(taskName) {
    template.name = taskName;
    template.status = userStatus;
    template.priority = userPriority;
    list.push(template);
  }
}

const changeStatusPriority = (task, newStatus, newPriority) => {
  if(isValidTask(task) && isValidStatus(newStatus) && isValidPriority(newPriority)) {
    list.forEach(elem => {
      if(elem.name === task) {
        if(newStatus){
          elem.status = newStatus;
        }
        if(newPriority){
          elem.priority = newPriority;
        }
      }
    })
  } else {
    console.log('Please, enter correct data');
  }
}

const changeTaskName = (changedName, newName) => {
  list.forEach(elem => {
    if(elem.name === changedName && newName) {
        elem.name = newName;
    }
  })
}

const deleteTask = (task) => {
  list.forEach(elem => {
    if(elem.name === task) {
      const position= list.indexOf(elem);
      list.splice(position, 1);
    } 
  })
}

const showListByStatus = () => {

  sortArray();

  let todoStr = '';
  let progressStr = '';
  let doneStr = '';
  
  list.forEach(elem => {
    const strTemplate = `\n    '${elem.name}'`
    
    switch(elem.status) {
      case STATUS.TODO:
        todoStr += strTemplate;
        break;
      case STATUS.PROGRESS:
        progressStr += strTemplate;
        break;
      case STATUS.DONE:``
        doneStr += strTemplate;
        break;  
    }
  })

  const emptyStrTemplate = `\n    -`;
  if(!todoStr) todoStr = emptyStrTemplate;
  if(!progressStr) progressStr = emptyStrTemplate;
  if(!doneStr) doneStr = emptyStrTemplate;

  console.log(`ToDo:${todoStr}\nIn Progress:${progressStr}\nDone:${doneStr}`);
}

const showListByPriority = () => {

  sortArray();

  let lowStr = '';
  let highStr = '';
  
  list.forEach(elem => {
    const strTemplate = `\n    '${elem.name}'`
    
    switch(elem.priority) {
      case PRIORITY.LOW:
        lowStr += strTemplate;
        break;
      case PRIORITY.HIGH:
        highStr += strTemplate;
        break; 
    }
  })

  const emptyStrTemplate = `\n    -`;
  if(!lowStr) lowStr = emptyStrTemplate;
  if(!highStr) highStr = emptyStrTemplate;

  console.log(`Low:${lowStr}\nHigh:${highStr}`);
}

addTask('make salad', STATUS.PROGRESS, PRIORITY.HIGH);
changeStatusPriority(list[0].name, STATUS.DONE, PRIORITY.HIGH);
changeTaskName(list[1].name, 'review students homework');
deleteTask(list[2].name);
showListByStatus();
showListByPriority();

