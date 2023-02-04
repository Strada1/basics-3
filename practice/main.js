const todo = {
	list: {
		'drink water': 'Done',
		'training': 'In Progress',
		"create a new practice task": "In Progress",
		"make a bed": "Done",
		"write a post": "To Do",
	},
	addTask(task, status) {
		this.list[task] = status;
	},
	deleteTask(task) {
		delete this.list[task];
	},
	changeStatus(task, status) {
		this.list[task] = status;
	},

	//========================================================================================================================================================
	
	
	// Вывод всего списка
	showList() {
		// Реализация To Do
		let countToDo = 0;
		for (const key in todo.list) {
			if (todo.list[key] === 'To Do') {
				countToDo += 1;
			}
		}
		// Проверка ан наличие статуса To Do
		if (countToDo === 0) {
			console.log(`ToDo: \n     -`);
			
		} else {
			console.log(`ToDo:`);
			for (const key in todo.list) {
				if (todo.list[key] === 'To Do') {
					console.log(`     ${key}`);
				}
			}
		};

		// Реализация In Progress
		let countInProgress = 0;
		for (const key in todo.list) {
			if (todo.list[key] === 'In Progress') {
				countInProgress += 1;
			}
		}
		// Проверка ан наличие статуса In Progress
		if (countInProgress === 0) {
			console.log(`In Progress: \n     -`);
			
		} else {
			console.log(`In Progress:`);
			for (const key in todo.list) {
				if (todo.list[key] === 'In Progress') {
					console.log(`     ${key}`);
				}
			}
		};
		
		// Реализация Done
		let countDone = 0;
		for (const key in todo.list) {
			if (todo.list[key] === 'Done') {
				countDone += 1;
			}
		}
		// Проверка ан наличие статуса Done
		if (countDone === 0) {
			console.log(`Done: \n     -`);
		} else {
			console.log(`Done:`);
			for (const key in todo.list) {
				if (todo.list[key] === 'Done') {
					console.log(`     ${key}`);
				}
			}
		};
	},
	//========================================================================================================================================================

};
// Добаваление задач
todo.addTask('have a walk', 'In Progress')

// Убрать задачу
todo.addTask('create a new practice task')

// Сменить статус
todo.addTask('training', 'Done')
todo.addTask('have a walk', 'Done')

// Вызов метода для показа всего списка
todo.showList();