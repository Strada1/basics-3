const list = [{ task: 'HTML', status: 'done', priority: 'medium' },
{ task: 'CSS', status: 'to do', priority: 'low' },
	{ task: 'JavaScript', status: 'in progress', priority: 'high' }];

function showList() {
	const toDoTasks = list.filter(name => name.status === 'to do');
	console.log('To Do:')
	if (toDoTasks.length === 0) {
		console.log(`\tNothing to do`);
	} else {
		toDoTasks.forEach(list => {
			console.log(`\t${list.task}: ${list.priority}`);
		});
	}
	const inProgressTasks = list.filter(name => name.status === 'in progress');
	console.log('In Progress:');
	if (inProgressTasks.length === 0) {
		console.log(`\tNothing in progress`);
	} else {
		inProgressTasks.forEach(list => {
			console.log(`\t${list.task}: ${list.priority}`);
		});
	}
	const doneTasks = list.filter(name => name.status === 'done');
	console.log('In Progress:');
	if (doneTasks.length === 0) {
		console.log(`\tNothing done`);
	} else {
		doneTasks.forEach(list => {
			console.log(`\t${list.task}: ${list.priority}`);
		});
	}
}
function addTask(taskName, position) {
	switch (position) {
		case 'start':
			list.unshift({ task: taskName, status: 'to do', priority: 'low' });
			break;
		case 'end':
			list.push({ task: taskName, status: 'to do', priority: 'low' });
			break;
	}
}
function deleteTask(taskName) {
	let indexNum = list.findIndex(name => name.task === taskName);
	if (list.includes(list[indexNum])) {
		list.splice(indexNum, 1);
	} else {
		return (null);
	}
}
function changeStatusAndPriority(taskName, statusName, priorityName) {
	const indexNum = list.findIndex(name => name.task === taskName);
	list[indexNum] = {task: taskName, status: statusName, priority: priorityName}
}
changeStatusAndPriority('HTML', 'in progress', 'high')
changeStatusAndPriority('JavaScript', 'done', 'low')
deleteTask('JavaScript')
addTask('Go sleep', 'start')
showList();