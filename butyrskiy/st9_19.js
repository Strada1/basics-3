const STATUS = {
  'Inbox': 'Inbox',
  'In progress': 'In progress',
  'ToDo': 'ToDo',
  'Done': 'Done',
};

const list = {};

// Check methods

const checkKit = {
  checkName(nameTask) {
    if(typeof(nameTask) === 'string') {
      return true;
    }
    else console.error(`Error name: ${nameTask}`);
  },
  checkNameInList(nameTask) {
    if(nameTask in list) {
      return true;
    } else console.error(`Task - «${nameTask}» not found`);
  },
  checkStatus(statusTask) {
    if(statusTask in STATUS) {
      return true;
    } else console.error(`Error status: ${statusTask}`);
  }
}

// Main operations

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

// Outputting the result to the console

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

// checking for missing tasks
  
  let inboxCounter = 0;
  let todoCounter = 0;
  let inProgressCounter = 0;
  let doneCounter = 0;

  for(let key in list) {
    if(list[key] === STATUS.Inbox) {
      inboxCounter++;
    }
  }

  for(let key in list) {
    if(list[key] === STATUS.ToDo) {
      todoCounter++;
    }
  }

  for(let key in list) {
    if(list[key] === STATUS["In progress"]) {
      inProgressCounter++;
    }
  }

  for(let key in list) {
    if(list[key] === STATUS.Done) {
      doneCounter++;
    }
  }

  if(inboxCounter == 0) {
    console.log(`${STATUS.Inbox}: \n\t -`)
  }

  if(todoCounter == 0) {
    console.log(`${STATUS.ToDo}: \n\t -`)
  }

  if(inProgressCounter == 0) {
    console.log(`${STATUS["In progress"]}: \n\t -`)
  }

  if(doneCounter == 0) {
    console.log(`${STATUS.Done}: \n\t -`)
  }
}


newTask('Walk a dog');
newTask('Write a post');
newTask('Open the door');
newTask('Listen to music');
newTask('Watch the movie');

changeStatus('Write a post', 'In progress');
changeStatus('Listen to music', 'Done');

deleteTask('Open the door');

showList();

// console.log(list);