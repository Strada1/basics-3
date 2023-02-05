// changeStatus("write a post", "Done") // меняет статус задачи
// addTask('have a walk'); // добавляет новую задачу
// deleteTask('have a walk'); // удаляет задачу
// showList(); // показывает список всех задач

const tD = 'To Do';
const iP = 'In Progress';
const d = 'Done';

const toDo = {
	list: {
		'do sports exercises': 'Done',
		'brush teeth': 'In Progress',
		'breakfast': 'To Do',
		'learn chinese': 'To Do',
		'buy a new laptop': 'In Progress',
		'have a rest': 'In Progress',
	},
	taskOperation(action, task, status) {
		if (action == 'addTask') {
			this.list[task] = status;
			console.log('New task ' + `${task}` + ' was uploaded!');
		} else if (action == 'deleteTask') {
			delete this.list[task];
			console.log('Task ' + `${task}` + ' was deleted!')
		}
	},
	changeStatus(task, status) {
		if (task in this.list) {
			this.list[task] = status;
			console.log('Status of task ' + `${task}` + ' was updated!');
			console.log('Now ' + `${task}` + ` is: ` + `${this.list[task]}`);
		}
	},
	showInfo() {
		for (const task in this.list) {
			if (this.list[task] != 'Done') {
				console.log(`${task}:` + " " + this.list[task]);

			}
		} console.log('Nothing is Done!')
	}
};





toDo.taskOperation('addTask', 'have a lunch', 'In Progress');
console.log(toDo.list)

toDo.taskOperation('deleteTask', 'have a lunch', 'To Do');
console.log(toDo.list)

toDo.changeStatus('have a rest', 'To Do');
console.log(toDo.list)

toDo.showInfo()