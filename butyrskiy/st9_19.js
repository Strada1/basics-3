const STATUS = {
  'Inbox': 'Inbox',
  'In progress': 'In progress',
  'ToDo': 'ToDo',
  'Done': 'Done',
};

const list = {};

const checkKit = {
  checkName(nameTask) {
    if(typeof(nameTask) === 'string') {
      return true;
    }
    else console.error('Error name');
  },
  checkNameInList(nameTask) {
    if(nameTask in list) {
      return true;
    } else console.error('Task not found');
  },
  checkStatus(statusTask) {
    if(statusTask in STATUS) {
      return true;
    } else console.error('Error Status');
  }
}

function newTask(nameTask) {
  if(checkKit.checkName(nameTask)) {
    list[nameTask] = STATUS.Inbox;
  }
}

function changeStatus(nameTask, statusTask) {
 if (checkKit.checkName(nameTask) 
  && checkKit.checkNameInList(nameTask) 
  && checkKit.checkStatus(statusTask)) {
    list[nameTask] = statusTask;
  }
}

function deleteTask(nameTask) {
  if(checkKit.checkNameInList(nameTask)) {
    delete list[nameTask];
  }
}

function showList() {
  for(let key in list) {
    if(list[key] === STATUS.Inbox) {
      console.log(`${STATUS.Inbox}:`);
      break;
    } 
  }
  for(let key in list) {
    if(list[key] === STATUS.Inbox) {
      console.log(`\t ${key}`);
    }  
  }

  for(let key in list) {
    if(list[key] === STATUS["In progress"]) {
      console.log(`${STATUS["In progress"]}:`);
      break;
    } 
  }
  for(let key in list) {
    if(list[key] === STATUS["In progress"]) {
      console.log(`\t ${key}`);
    }  
  }

  for(let key in list) {
    if(list[key] === STATUS.ToDo) {
      console.log(`${STATUS.ToDo}:`);
      break;
    } 
  }
  for(let key in list) {
    if(list[key] === STATUS.ToDo) {
      console.log(`\t ${key}`);
    }  
  }

  for(let key in list) {
    if(list[key] === STATUS.Done) {
      console.log(`${STATUS.Done}:`);
      break;
    } 
  }
  for(let key in list) {
    if(list[key] === STATUS.Done) {
      console.log(`\t ${key}`);
    }  
  }
}


newTask('Walk a dog');
newTask('Write a post');
newTask('Open the door');
newTask('Listen to music');
newTask('Watch the movie');

changeStatus('Write a post', 'In progress');
changeStatus('Listen to music', 'ToDo');
changeStatus('Walk a dog', 'Done');

deleteTask('Open the door');

showList();

// console.log(list);