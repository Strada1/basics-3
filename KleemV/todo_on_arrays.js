const statuses = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done'
}

const tasksList = [
  {name: 'Приступить к выполнению задачи', status: statuses.IN_PROGRESS, priority: 'high'},
  {name: 'Не читерить', status:statuses.TO_DO, priority: 'medium'},
  {name: 'Гуглить то, что не ясно', status: statuses.IN_PROGRESS, priority: 'medium'},
  {name: 'Повторить методы массивов',status: statuses.DONE, priority: 'medium'}
]


const addTask = (name, status, priority) => tasksList.push({ name, status, priority });

const showListStatus = () => {
  const inProgress = tasksList.filter(item=>item.status === 'In progress');
  const toDo = tasksList.filter(task=>task.status === 'To Do');
  const Done = tasksList.filter(task=>task.status === 'Done');
return {inProgress,toDo, Done}
}

const deleteTask = function (name){
  const index = tasksList.findIndex(item => item.name===name)
  if (index < 0){
    console.log('задача с таким именем не найдена');
  } else {
    tasksList.splice(index, 1)
  }
}

const showList =()=> tasksList.map(item=>console.log(item));



addTask('Не паниковать', 'To Do', 'low');
deleteTask('Повторить методы массивов');
showList()

//доделать: 
//changeStatus
//changePriority
//проверку на наличие задачи






// console.log(tasksList);