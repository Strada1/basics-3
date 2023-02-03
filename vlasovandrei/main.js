const statuses = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
}

const list = {
  'create a new practice task': statuses.TO_DO,
  'do the housework': statuses.TO_DO,
  'make a bed': statuses.TO_DO,
  'write a post': statuses.TO_DO,
  'do the Strada': statuses.TO_DO,
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
  for (let prop in statuses) {
    let isEmptyStatus = true;
    console.log(`${statuses[prop]}:`)
    for (let key in list) {
      if (list[key] == statuses[prop]) {
        console.log(`\t${key}`);
        isEmptyStatus = false;
      }
    }
    if(isEmptyStatus) console.log(`\t-`);
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