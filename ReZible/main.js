const STATUSES = {
  TO_DO: "To Do",
  DONE: "Done",
  IN_PROGRESS: "In Progress"
}
const PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
}
const list = [ 
    {name: 'create a post', status: STATUSES.TO_DO, priority: PRIORITIES.LOW}, 
    {name: 'test', status: STATUSES.DONE, priority: PRIORITIES.MEDIUM},
    {name: 'test1', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
    {name: 'test2', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.HIGH},
    {name: 'test3', status: STATUSES.DONE, priority: PRIORITIES.LOW},
    {name: 'test22', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH}
  ];
function changeStatus(task, newStatus){
  const tasks = list.find(tasks => tasks.name === task);
  const lastStatus = tasks.status;
  if(!tasks){
      return console.log("Такой задачи нет в списке");
  }
  if(!(newStatus)){
      return console.log('Вы ввели неверный статус');
  }
  tasks.status = newStatus;
  console.log(`Статус для "${task}" был изменен с "${lastStatus}" на "${newStatus}"`);
}
function addTask(task){
  const defaultStatus = STATUSES.TO_DO;
  const defaultPriority = PRIORITIES.MEDIUM;
  if(task === "" || task === undefined){
    return console.log("Вы не ввели задачку");
  }
  list.push({name: task, status: defaultStatus, priority: defaultPriority});
  console.log(`Задача "${task}" была успешно добавлена в список`);
}
function deleteTask(task){
  const taskIndex = list.findIndex(tasksIndex => tasksIndex.name === task);
  const countDeletedElem = 1;
  if(taskIndex < 0){
      return console.log("Такой задачи нет в списке");
  }
  if(task === "" || task === undefined){
      return console.log("Вы не ввели задачку для удаления");
  }
  list.splice(taskIndex,countDeletedElem)
  console.log(`Задача "${task}" была успешно удалена из списка`);
}
function showTaskOfStatus(status){
  if(!(status)){
      return console.log('Вы ввели неверный статус');
  }
  flag = false;
  let text = `${status}:`;
  list.sort(function (a, b) {
    (a.priority === 'medium') ? a = 1 : (a.priority === 'high') ? a = 2 : a = 0;
    (b.priority === 'medium') ? b = 1 : (b.priority === 'high') ? b = 2 : b = 0;
    return a-b;
    }   
  );
  list.forEach(list => {
    if(list.status === status){
      text += `\n\t ${list.name} - ${list.priority}`;
      flag = true;
    }
  });
  if(!flag){
      text += '\n\t -';
  }
  console.log(text);
}
function showList(){
  showTaskOfStatus(STATUSES.TO_DO);
  showTaskOfStatus(STATUSES.DONE);
  showTaskOfStatus(STATUSES.IN_PROGRESS);
}
changeStatus('test', STATUSES.IN_PROGRESS);
addTask("learn PHP");
addTask("learn CSS");
deleteTask('learn PHP');
showList();