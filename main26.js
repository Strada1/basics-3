const toDoList = [
    {name: "complete the task", status: "In progress", priority: "middle"},
    {name: "have breakfast", status: "Done", priority: "high"},
    {name: "write a script", status: "To Do", priority: "very high"}, 
    {name: "take a walk", status: "skipped", priority: "low"},
    {name: "call a friend", status: "new task", priority: "low"}, 
];
    
function 
changeStatus(taskName, newStatus) {
  const ChangeIndex = toDoList.findIndex(task => task.name === taskName);
  toDoList[ChangeIndex].status = newStatus;
}

function
addTask (name, status, priority){
  toDoList.push({name, status, priority});
}

function 
deleteTask (taskName) {
  const deleteIndex = toDoList.findIndex(task => task.name === taskName);
  toDoList.splice (deleteIndex,1);
}

function
showlist() {
  const sortedStatus = toDoList.sort((task1, task2)=> 
  {
    if (task1.status > task2.status) return 1;
    if (task1.status == task2.status) return 0;
    if (task1.status < task2.status) return -1;
  });
  console.log(sortedStatus);
}

changeStatus('complete the task', 'To Do'); 
addTask ('call a friend', 'new task', 'middle');
deleteTask ('have breakfast');
showlist();