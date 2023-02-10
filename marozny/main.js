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
let done = list.find(task => task.status === DONE);
let progress = list.find(task => task.status === PROGRESS);
let todo = list.find(task => task.status === TODO);

console.log(`---TO DO---\n
${todo.name} priority: '${todo.priority}'\n
---In Progress---\n
${progress.name} priority: '${progress.priority}'\n
---Done---\n
${done.name} priority: '${done.priority}'`)
}

// addTask('walk', 'To Do', 'high')
// updateStatus('try to sleep', 'Done')
// deleteTask('test');
// showList()