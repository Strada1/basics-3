const COLOR = {
  RED: `\x1b[31m`,
  GREEN: `\x1b[32m`,
  YELLOW: `\x1b[33m`,
  MAGENTA: `\x1b[35m`,
  CYAN: `\x1b[36m`,
  CLR: `\x1b[0m`
};

const STATUSES = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
};

const STATUSESS = {
  Done: `${COLOR.GREEN} Завершено: ${COLOR.CLR}`,
  Prog: `${COLOR.YELLOW} В процессе: ${COLOR.CLR}`,
  todo: `${COLOR.MAGENTA} Нужно сделать: ${COLOR.CLR}`,
};

let testArray = [
  {name : 'Сходить в магазин', status : 'To Do', priority : 'low'},
  {name : 'Обработать фотки', status : 'To Do', priority : 'high'},
  {name : 'Сделать задание Strada', status : 'In Progress', priority : 'high'},
  {name : 'Поспать', status :'Done', priority : 'low'},
  {name : 'Сходить в качалку', status : 'To Do', priority : 'low'}
];

const findIndex = (indexName) => {
  return testArray.findIndex(x => x.name == indexName); 
};

const changeStatus = (taskName, newTaskStatus, newTaskPriority) => {

  idx = findIndex(taskName);   

  if (idx >= 0) {
    testArray[idx] = {name : taskName, status : newTaskStatus, priority : newTaskPriority};
  } else {
    console.log(COLOR.RED, `Статус`, COLOR.CLR + 
                ` "` + taskName + `" ` + 
                COLOR.RED, `не изменён - нет в списке!`, COLOR.CLR);
  };
};

const addNewTask = (newTaskName) => {

  idx = findIndex(newTaskName);     

  if (idx >= 0) {
    console.log('Такая задача уже есть!');
  } else {
    testArray.push({name : newTaskName, status : 'To Do', priority : 'low'});
  };
};

const deleteTask = (taskName) => {

  idx = findIndex(taskName);     

  if (idx >= 0) {
    testArray.splice(idx, 1);
    console.log(COLOR.RED, `Задача:`, COLOR.CLR +
                ` "` + taskName + `" ` + 
                COLOR.RED, `удалена.` ,COLOR.CLR);
  } else {
    console.log(COLOR.RED, `Не удалено:`, COLOR.CLR + 
                ` "` + taskName + `" ` + 
                COLOR.RED, `нет в списке!`, COLOR.CLR);
  };
};


  function filteredStatuses(testArray, status, newStatus) {
    const toDo = testArray.filter(todo => todo.status === newStatus);
  
    console.log(status);
    
    if (toDo.length > 0) {
      for (const all of toDo) {
       console.log(' - ' + all.name + ',' + 
                   COLOR.CYAN, 'приоритет: ', COLOR.CLR + 
                   all.priority);
      };
    } else {
      console.log(' - ');
    };
  };
  
  const showList = () => {
    console.log(`Задач на сегодня ` + 
                COLOR.GREEN + testArray.length +`:` + COLOR.CLR);
  
    filteredStatuses(testArray, STATUSESS.Done, STATUSES.DONE);
    filteredStatuses(testArray, STATUSESS.Prog, STATUSES.IN_PROGRESS);
    filteredStatuses(testArray, STATUSESS.todo, STATUSES.TODO);
  };
  


changeStatus ('Сделать задание Strada', 'To Do', 'low');

changeStatus ('Записаться на бокс', 'To Do', 'low');

addNewTask ('Собраться на концерт', 'In Progress', 'high');

deleteTask ('Собраться на концерт');

deleteTask ('Stradat');

showList();

