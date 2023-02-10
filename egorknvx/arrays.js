const STATUS = {
   TODO: 'ToDo',
   IN_PROGRESS: 'In Progress',
   DONE: 'Done'
};

const PRIORITY = {
   LOW: 'Low',
   HIGH: 'High'
};

const listToDo = [
   { name: 'Create new practice list', status: STATUS.TODO, priority: PRIORITY.LOW },
   { name: 'Make a bed', status: STATUS.TODO, priority: PRIORITY.HIGH },
   { name: 'Write a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
   { name: 'Strada', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
   { name: 'Walk in the park', status: STATUS.TODO, priority: PRIORITY.LOW },
   { name: 'Morning work-out', status: STATUS.TODO, priority: PRIORITY.HIGH },
];

function deleteTask(nameTask) {
   const nameIndex = listToDo.findIndex(task => task.name === nameTask);
   listToDo.splice(nameIndex, 1);
};

function addTask(nameTask, statusTask = STATUS.TODO, priorityTask = PRIORITY.LOW) {
   listToDo.push({
      name: nameTask,
      status: statusTask,
      priority: priorityTask
   });
};

function changeTask(nameTask, statusTask = STATUS.TODO, priorityTask = PRIORITY.LOW) {
   const nameIndex = listToDo.findIndex(task => task.name === nameTask);
   listToDo[nameIndex] = {
      name: nameTask,
      status: statusTask,
      priority: priorityTask
   };
};

function showList() {
   const sortedListDone = listToDo.filter(task => task.status === 'Done');
   const sortedListToDo = listToDo.filter(task => task.status === 'ToDo');
   const sortedListInProgress = listToDo.filter(task => task.status === 'In progress');

   const showSortedTask = (statusTask, status) => {
      console.log(`\n${status}:`);
      statusTask.length ? statusTask.forEach(list => console.log(`\t${list.name} | ${list.priority} priority`))
         : console.log(`\tNothing is ${status}`);
   };

   showSortedTask(sortedListDone, STATUS.DONE);
   showSortedTask(sortedListToDo, STATUS.TODO);
   showSortedTask(sortedListInProgress, STATUS.IN_PROGRESS);
};

deleteTask('Write a post');
addTask('Read a book', 'In progress');
changeTask('Make a bed', 'In progress', 'Low');
showList();
