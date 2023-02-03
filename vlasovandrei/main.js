const statuses = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
}

const list = {
  'create a new practice task': statuses.DONE,
  'do the housework': statuses.DONE,
  'make a bed': statuses.DONE,
  'write a post': statuses.IN_PROGRESS,
  'do the Strada': statuses.IN_PROGRESS,
}

function isValidTask(task) {
  return task in list;
}

function isValidStatus(status) {
  return status == statuses.TO_DO || status == statuses.IN_PROGRESS || status == statuses.DONE;
}

function changeStatus(task, status) {
  if (isValidTask(task) && isValidStatus(status)) {
    list[task] = status;
  } else {
    console.log('There\'s no such task or status.')
  }
}

function addTask(task) {
  if (isValidTask(task)) {
    console.log('This task already exists!')
  } else {
    list[task] = statuses.TO_DO;
  }
}

function deleteTask(task) {
  if (isValidTask(task)) {
    delete list[task];
  } else {
    console.log('There\'s no such task.')
  }
}

function showList() {
  let isNothingToDo = true;
  let isNothingInProgress = true;
  let isNothingDone = true;

  for (let key in list) {
    if (list[key] == statuses.TO_DO) {
      console.log(`${key}: ${statuses.TO_DO}`);
      isNothingToDo = false;
    }
  }
  if(!isNothingToDo) console.log();
  
  for (let key in list) {
    if (list[key] == statuses.DONE) {
      console.log(`${key}: ${statuses.DONE}`)
      isNothingDone = false;
    } 
  }    
  if(!isNothingDone) console.log();
  
  for (let key in list) {
    if (list[key] == statuses.IN_PROGRESS) {
      console.log(`${key}: ${statuses.IN_PROGRESS}`)
      isNothingInProgress = false;
    }
  }
  if(!isNothingInProgress) console.log();


  if (isNothingToDo) {
    console.log('Nothing is To Do');
  }
  if (isNothingDone) {
    console.log('Nothing is Done')
  }
  if (isNothingInProgress) {
    console.log('Nothing is In Progress')
  }
}

//Проверки
changeStatus('make a bed', statuses.IN_PROGRESS); //меняем статус задачи
changeStatus('make a BAD', statuses.TO_DO); //если задачи нет в списке, выдать сообщение 
changeStatus('make a bed', statuses.FINISHED); //меняем статус задачи на несуществующий

addTask('feed the cat'); //добавляем задачу
addTask('make a bed'); //если задача уже есть в списке, выдать сообщение

deleteTask('make a bed'); //удаляем задачу
deleteTask('make a BAD'); //если задачи нет в списке, выдать сообщение

showList();

console.log(list);