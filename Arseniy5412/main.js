
const toDo = {
	list: {
		"create a new practice task": "In Progress", 
		"make a bed": "Done", 
		"write a post": "To Do"
	},

	changeStatus(task, status) {
		this.list[task] = status;
	},

	addTask(task, status) {
		this.list[task] = status;
	},

	deleteTask(task) {
		delete this.list[task];
	},

	showList () {
		for (let key in this.list ) {
			if (this.list[key] === "In Progress") {
				console.log(key + ' : ' + this.list[key]);
			} else if (this.list[key] === "Done") {
				console.log(key + ' : ' + this.list[key]);
			} else if (this.list[key] === "To Do") {
				console.log(key + ' : ' + this.list[key]);
			} else {
				console.log('Nothing is done');
			}
		}
	}
};	

toDo.changeStatus("write a post", "gfgfdfdf") // меняет статус задачи
toDo.addTask('payng compucter', 'Done') // добавляет новую задачу
//toDo.deleteTask('have a walk'); // удаляет задачу
toDo.showList(); // показывает список всех задач
