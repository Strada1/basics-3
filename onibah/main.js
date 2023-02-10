const list = [
	{ name: 'create a post', status: '1', priority: 'low' },
	{ name: 'test', status: 'Done', priority: 'high' },
	{ name: 'to eat', status: 'To Do', priority: 'high' },
	{ name: 'watch tv', status: 'To Do', priority: 'low' },
];

list.push({ name: 'training', status: 'To Do', priority: 'low' },);
list.push({ name: 'run', status: 'In progress', priority: 'low' },);

list.find(task => {
	if (task.name === 'to eat') {
		return task.status = 'In progress'
	}
})

const index = list.findIndex(num => num.name === 'test')
if (index !== -1) {
	list.splice(index, 1)
};

function getParams(params) {
	const tasks = list.filter(task => task.status === params);
	if (tasks.length === 0) {
		console.log(`${params}: \n \t -`);
	} else {
		const taskName = tasks.map(taskName => taskName.name);
		console.log(`${params}`);
		for (const iterator of taskName) {
			console.log(`\t${iterator}`);
		};
	};
};
function showList() {
	getParams('To Do');
	getParams('In progress');
	getParams('Done');
}
showList();
