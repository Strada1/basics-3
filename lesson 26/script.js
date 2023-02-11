const STATUS = {
 TO_DO: 'To Do',
 IN_PROGRESS: 'In progress',
 DONE: 'Done',
}

const PRIORITY = {
 LOW: 'Low',
 MEDIUM: 'Medium',
 HIGH: 'High'
}

const list = [
 {
  name: 'test',
  status: STATUS.DONE,
  priority: PRIORITY.LOW
 },
 {
  name: 'learn js',
  status: STATUS.IN_PROGRESS,
  priority: PRIORITY.HIGH
 },
];

const checkTask = (taskName, arr) => {
 if (arr.some(task => task.name === taskName)) {
  return true
 } return false;
}


const addTask = (newName, newStatus, newPriority) => {
 if (newName === '') {
  return console.log('enter task name');
 }
 checkTask(newName, list) ?
  console.log('task is already add') :
  list.push({ name: newName, status: newStatus, priority: newPriority })
}

const deleteTask = (deleteName) => {
 if (checkTask(deleteName, list)) {
  const index = list.findIndex(item => item.name === deleteName);
  if (index !== -1) {
   list.splice(index, 1);
  }
 } else {
  console.log('no task')
 }
}

const changeStatus = (taskName, changeTaskStatus) => {
 if (checkTask(taskName, list)) {
  const index = list.findIndex(item => item.name === taskName);
  list[index].status = changeTaskStatus
 } else {
  console.log('no task')
 }
}

const showList = (showTask) => {

 const toDoList = showTask.filter(task => task.status === STATUS.TO_DO);
 const inProgresList = showTask.filter(task => task.status === STATUS.IN_PROGRESS)
 const doneList = showTask.filter(task => task.status === STATUS.DONE)

 showMessage(toDoList, STATUS.TO_DO)
 showMessage(inProgresList, STATUS.IN_PROGRESS)
 showMessage(doneList, STATUS.DONE)

 function showMessage(array, STATUSES) {
  if (!(array == '')) {
   console.log(STATUSES + ': ');
   array.forEach(element => {
    console.log(element.name)
   })
  } else {
   console.log(STATUSES + ': ' + '\n' + '-');
  }
 }
}

addTask('test', 'In progress', 'low')
addTask('learn js', 'In progress', 'high')
addTask('learn React', 'To Do', 'high')
addTask('', 'To Do', 'high')
addTask('create a post', 'In progress', 'Medium')
changeStatus('create a post', 'Done')
deleteTask('test')
deleteTask('')
showList(list)