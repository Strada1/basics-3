let TODOlist = [ 
	{name:'Проснуться',status:'Done',priority:'normmal'},
  {name:'Заняться по курсу',status:'In progress',priority:'high'},  
  {name:'Поесть',status:'ToDo',priority:'low'}, 
];

let changeStatus = (change, Stat) => {
  TODOlist[change].status = Stat
};

let addTask = (nameTask, statusTask, priorityTask) => {
  const mass = {name:nameTask,status:statusTask,priority:priorityTask}
  TODOlist.push(mass)
};

let deleteTask = (index, Delet) => {
  TODOlist.splice(index, Delet)
};

changeStatus(1, 'Done');
addTask('Сходить ко врачу','ToDo','high');
deleteTask(0, 1);

console.log(TODOlist);