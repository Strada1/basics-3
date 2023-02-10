const list = [ 
	{name: 'create a post', status: 'In Progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'medium'},
  {name: 'test1', status: 'To Do', priority: 'low'},
  {name: 'test2', status: 'In Progress', priority: 'high'},
  {name: 'test3', status: 'To Do', priority: 'low'}
];
const STATUS = {
  "To Do": "To Do",
  "Done": "Done",
  "In Progress": "In Progress"
}
const PRIORITY = {
  low: 'low',
  medium: 'medium',
  high: 'high'
}
function changeStatus(task, newStatus){
  const tasks = list.find(tasks => tasks.name === task);
  const lastStatus = tasks.status;
  if(!tasks){
      return console.log("Такой задачи нет в списке");
  }
  if(!(newStatus in STATUS)){
      return console.log('Вы ввели неверный статус, доступные статусы: "To Do", "Done", "In Progress"');
  }
  tasks.status = newStatus;
  console.log(`Статус для "${task}" был изменен с "${lastStatus}" на "${newStatus}"`);
}
function addTask(task){
  const defaultStatus = 'To Do';
  const defaultPriority = 'medium';
  if(task === "" || task === undefined){
      console.log("Вы не ввели задачку");
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
  if(!(status in STATUS)){
      return console.log('Вы ввели неверный статус, доступные статусы: "To Do", "Done", "In Progress"');
  }
  flag = false;
  let text = `${status}:`;
  list.sort(function (a, b) {
    if (a.priority === 'low') {
      return -1;
    }
    if (b.priority === 'low') {
      return 1;
    }
    if(a.priority === 'medium'){
      return -1;
    }
    if(b.priority === 'medium'){
      return 1;
    }
    if(a.priority === 'high'){
      return -1;
    }
    if(b.priority === 'high'){
      return 1;
    }}
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
  showTaskOfStatus("To Do");
  showTaskOfStatus("Done");
  showTaskOfStatus("In Progress");
}
changeStatus('test','In Progress');
addTask("learn PHP",'low');
addTask("learn CSS");
deleteTask('learn PHP');
showList();