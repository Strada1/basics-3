const STATUSES = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
}

const PRIORITIES = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
}

const list = [
  {name: 'read the book', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
  {name: 'create a practice task', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
  {name: 'do the housework', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH},
  {name: 'make a bed', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
  {name: 'write a post', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH},
  {name: 'do the Strada', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.LOW},
]

function isValidTask(task) {
  return list.find(item => item.name === task);
}

function isValidStatus(status) {
  return status == STATUSES.TO_DO || status == STATUSES.IN_PROGRESS || status == STATUSES.DONE;
}

function changeStatus(task, status) {
  if (isValidTask(task) && isValidStatus(status)) {
    list.find(item => item.name === task).status = status;
  } else {
    console.log('There\'s no such task or status.')
  }
}

function addTask(task) {
  if (isValidTask(task)) {
    console.log('This task already exists!')
  } else {
    list.push({name: task, status: STATUSES.TO_DO, priority: PRIORITIES.LOW});
  }
}

function deleteTask(task) {
  if (isValidTask(task)) {
    list.splice([list.findIndex(item => item.name === task)], 1);
  } else {
    console.log('There\'s no such task.')
  }
}


function showListByStatus() {
  list.sort(function(a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  
  for (let prop in STATUSES) {
    let isEmptyStatus = true;
    console.log(`${STATUSES[prop]}:`)
    for (let task of list) {
      if (task.status === STATUSES[prop]) {
      console.log(`\t${task.name}`);
      isEmptyStatus = false;
    }
    }
    if(isEmptyStatus) console.log(`\t-`);
  }
}

function showListByPriority() {
  list.sort(function(a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  for (let prop in PRIORITIES) {
    let isEmptyPriority = true;
    console.log(`${PRIORITIES[prop]}:`)
    for (let task of list) {
      if (task.priority === PRIORITIES[prop]) {
        console.log(`\t${task.name}`);
        isEmptyPriority = false;
      }
    }
    if(isEmptyPriority) console.log(`\t-`);
  }
}

// Проверки
changeStatus('make a bed', STATUSES.IN_PROGRESS); //меняем статус задачи;
changeStatus('make a BAD', STATUSES.TO_DO); //если задачи нет в списке, выдать сообщение 
changeStatus('make a bed', STATUSES.FINISHED); //меняем статус задачи на несуществующий

addTask('feed the dog'); //добавляем задачу
addTask('make a bed'); //если задача уже есть в списке, выдать сообщение

deleteTask('make a bed'); //удаляем задачу
deleteTask('make a BAD'); //если задачи нет в списке, выдать сообщение

showListByStatus();
showListByPriority();

