const toDoList = [
  {name: "read book", status: "In Progress", priority: "low"},
  {name: "go to swim", status: "To Do", priority: "high"},
  {name: "buy food", status: "To Do", priority: "low"},
  {name: "record a video", status: "In Progress", priority: "high"},
  {name: "english homework", status: "Done", priority: "high"},
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

/*   function
  findStatusDone() {
    console.log(toDoList.includes('Done'));
  } */

changeStatus('go to swim', 'Done'); 
addTask ('have a walk', 'To Do', 'low');
deleteTask ('buy food');
showlist();

