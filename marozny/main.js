const list = [{
		name: 'create a post',
		status: 'In progress',
		priority: 'low'
	},
	{
		name: 'test',
		status: 'Done',
		priority: 'high'
	},
	{
		name: 'try to sleep',
		status: 'To Do',
		priority: 'low'
	},
	{
		name: 'try to catch',
		status: 'To Do',
		priority: 'high'
	}
];

const TODO = 'To Do';
const DONE = 'Done';
const PROGRESS = 'In progress';

const addTask = (name, status, priority) => {
	list.push({
		name: name,
		status: status,
		priority: priority
	});
	return console.log(`New task '${name}' is successfully added!`);
}

const updateStatus = (name, status) => {
	const indexTask = list.findIndex(task => task.name === name);
	list[indexTask].status = status;
	return console.log(`Status of current task is successfully updated to '${status}'`)
}

const deleteTask = (name) => {
	const indexTask = list.findIndex(task => task.name === name);
	list.splice(indexTask, 1);
	return console.log(`Task '${name}' is successfully deleted!`);
}

const showList = () => {
	const done = [];
	const progress = [];
	const todo = [];

	for (const task of list) {
		switch (task.status) {
			case TODO:
				todo.push(task);
				break
			case DONE:
				done.push(task);
				break
			case PROGRESS:
				progress.push(task);
				break
		}
	}

	console.log('---TO DO---');
	for (const task of todo) {
		console.log(`${task.name}, priority: ${task.priority}\n`)
	}
	console.log('---In Progress---');
	for (const task of progress) {
		console.log(`${task.name}, priority: ${task.priority}\n`)
	}
	console.log('---Done---');
	for (const task of done) {
		console.log(`${task.name}, priority: ${task.priority}\n`)
	}
}
// addTask('walk', 'To Do', 'high')
// updateStatus('try to sleep', 'Done')
// deleteTask('test');
showList()