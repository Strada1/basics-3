let testArray = [
  {name : 'Сходить в магазин', status : 'To Do', priority : 'low'},
  {name : 'Обработать фотки', status : 'To Do', priority : 'high'},
  {name : 'Сделать задание Strada', status : 'In Progress', priority : 'high'},
  {name : 'Поспать', status :'Done', priority : 'low'},
  {name : 'Сходить в качалку', status : 'To Do', priority : 'low'}
];



const changeStatus = (taskName, newTaskStatus, newTaskPriority) => {

  let task = testArray.find(existName => existName.name == taskName);

  if (task) {
    task = {name : taskName, status : newTaskStatus, priority : newTaskPriority};
  } else {
    console.log(`\x1b[31m Статус \x1b[0m"${taskName}"\x1b[31m не изменён - нет в списке! \x1b[0m`);
  };
};

const addNewTask = (newTaskName) => {

  let task = testArray.find(existName => existName.name == newTaskName);

  if (task) {
    console.log('Такая задача уже есть!');
  } else {
    testArray.push({name : newTaskName, status : 'To Do', priority : 'low'});
  };
};

const deleteTask = (taskName) => {
let idx = testArray.findIndex(x => x.name == taskName);              
  if (idx >= 0) {
    testArray.splice(idx, 1);
    console.log(`\x1b[31m Задача:\x1b[0m "${taskName}"\x1b[31m удалена.\x1b[0m`);
  } else {
    console.log(`\x1b[31m Не удалено:\x1b[0m "${taskName}",\x1b[31m нет в списке! \x1b[0m`);
  };
};

const showList = () => {

  console.log(`Задач на сегодня \x1b[32m${testArray.length}:\x1b[0m`);

  const toDo = testArray.filter(todo => todo.status === 'To Do');
  
  console.log('\x1b[35m','Нужно сделать:', '\x1b[0m');
  for (const all of toDo) {
    console.log(' - ' + all.name + ',' + '\x1b[36m','приоритет: ','\x1b[0m' + all.priority);
  };
  
  
  const inProgress = testArray.filter(todo => todo.status === 'In Progress');
  
  console.log('\x1b[33m', 'В процессе:', '\x1b[0m');
  for (const all of inProgress) {
    console.log(' - ' + all.name + ',' + '\x1b[36m','приоритет: ','\x1b[0m' + all.priority);
  };
  
  const done = testArray.filter(todo => todo.status === 'Done');
  
  console.log('\x1b[32m', 'Завершено:', '\x1b[0m');
  for (const all of done) {
    console.log(' - ' + all.name + ',' + '\x1b[36m','приоритет: ','\x1b[0m' + all.priority);
  };
  };


changeStatus ('Сделать задание Strada', 'To Do', 'low');

changeStatus ('Записаться на бокс', 'To Do', 'low');

addNewTask ('Собраться на концерт', 'In Progress', 'high');

deleteTask ('Собраться на концерт');

deleteTask ('Stradat');

showList();









