const todo = {
 list: {
	'create a new practice task': 'In Progress',
	'make a bed': 'Done',
	'write a post': 'To Do',
},
changeStatus (task, stat) {
	this.list[tasl] = stat;
},
addTask(task) {
	this.list[task] = 'To Do';

},
deleteTask() {
delete this.list[task];
},
showList() {
	for (const task in todo.list) {
		console.log(`${stat}: \n ${task} \n`)
	}
}
}



console.log(changeStatus(todo.list['write a post', 'Done']));
