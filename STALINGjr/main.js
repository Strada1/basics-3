const list = [ 
	{name: 'complete task', status: 'In progress', priority: 'high'},
  {name: 'sport', status: 'Done', priority: 'average'},  
  {name: 'eat', status: 'ToDo', priority: 'low'}, 
];

const changeStatus = (change, whoStatus) => {
  list[change].status = whoStatus
}

const addTask = (nameTask, statusTask, prioritiTask) => {
  const obj = {name: nameTask, status: statusTask, priority: prioritiTask}
  list.push(obj)
}

const deleteTask = (indx, whoDeletes) => {
  list.splice(indx, whoDeletes)
}

changeStatus(0, 'Done')
addTask('eat2', 'Up', 'average')
deleteTask(0, 2)
console.log(list)