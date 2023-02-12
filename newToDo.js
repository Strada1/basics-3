onst STATUS = {
    INPROGRESS: 'In progress',
    DONE: 'Done',
    NES: 'Not even started',
  };
  
  const PRIORITY = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGHT: 'high',
  };
  
  const list = [ 
    {task: 'create a post', status: STATUS.INPROGRESS, priority: PRIORITY.LOW}, 
    {task: 'test', status: STATUS.DONE, priority: PRIORITY.HIGHT},
    {task: 'learn Italian', status: STATUS.NES, priority: PRIORITY.MEDIUM},
  ];

  function newTask(task, status, priority) {
    list.push({task: task, status: status, priority: priority})
  };

// function deleteTask(task) {
// let list = list.filter(name => name.task !== task);
// };

function deleteTask(task) {
  let findIndexForDelete = list.findIndex(name => name.task === task);
  list.splice(findIndexForDelete, 1);
};

function changeStatus(task, status) {
  let findIndexToChangeStatus = list.findIndex(name => name.task === task);
  list[findIndexToChangeStatus].status = status;
};

  function showList() {
  
   
  let tasksDone = list.filter(name => name.status === STATUS.DONE);
  let tasksInProgress = list.filter(name => name.status === STATUS.INPROGRESS);
  let tasksNes = list.filter(name => name.status === STATUS.NES);
  tasksInProgress = JSON.stringify(tasksInProgress);
  tasksNes = JSON.stringify(tasksNes);
  tasksDone = JSON.stringify(tasksDone);
   
if (tasksDone.length > 0) {
 console.log('Done: ' + '\n' + tasksDone);


 }
    if (tasksInProgress.length > 0 ){
  console.log('In Progress: ' + '\n' + tasksInProgress);
 
   
 }
    if (tasksNes.length > 0) {
console.log('Not even started: ' + '\n' + tasksNes);
  
} else {
      console.log(' - ');
    }  
    
 }


newTask('make a haircut', STATUS.DONE , PRIORITY.MEDIUM);
newTask('make todolist', STATUS.NES , PRIORITY.HIGHT);
// deleteTask('test');
changeStatus('learn Italian', STATUS.INPROGRESS);
showList();

