const list = {
	'create a new practice task': 'In Progress',
	'make a bed': 'Done',
	'write a post': 'To Do',
}
function changeStatus (task, stat) {
	list[task] = stat;
};

function addTask(task, stat) {
	list[task] = 'To Do';
};

function deleteTask(task) {
delete list[task];
};

function showList() {
	
	for (const task in list) {
		console.log(`${task}: ${list[task]}`);
		
	}
}



addTask('have a walk','To Do');
deleteTask('have a walk');
changeStatus('create a new practice', 'To Do');
changeStatus('make a bed', 'To Do')
changeStatus('write a post', 'In Progress');
showList();
