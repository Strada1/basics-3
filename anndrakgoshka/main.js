const list = {
	
	
	'write a post': 'To Do',
}

function changeStatus (task, stat) {
	if (list[task] !== stat) {
	list[task] = stat;
	}
};

function addTask(task) {
	if (!task) {
		return console.log('error')
	}
	for (const currentTask in list) {
		if(currentTask === task) {
			return console.log('error')
		}
	}	
	
	if(task in list) {
		return list[task] 
	}
	list[task] = 'To Do';
	// list[task] = 'To Do';
	
};

function deleteTask(task) {	
	delete list[task];
};

function showList() {
	
	console.log('To Do');
	// for (const task in list) {
	// 	if (list[task] === 'To Do') {
	// 		console.log(task)
	// 	} else if (!task[list]) {
	// 		console.log('Nothing is To Do');
	// 	}
	// 	break;
	// }
	

	console.log('In Progress')
	for (const task in list) {
		if (list[task] === 'In Progress') {
			console.log(task)
		} 
		else {
			console.log('Nothing')
		}
		break;
		
	}

	console.log('Done')
	for (const task in list) {
		if (list[task] === 'Done') {
			console.log(task)
		} else if (!task[list]) {
			console.log('Nothing is Done');
		}
		break;
	}
}

addTask('xbox')
console.log(list)
showList();