const tasks = {
	"create a new practice task": "In Progress",
	"make a bed": "To Do",
	"write a post": "To Do",
};

function changeStatus(name, status) {
	tasks[name] = status;
	return console.log("Status of task is successfully changed!");
};

function addTask(name, status) {
	status ? tasks[name] = status : tasks[name] = "To Do";
	return console.log("New task is added!");
};

function deleteTask(name) {
	delete tasks[name];
	return console.log("Task is successfully deleted!");
}

function showList() {
	const cloneToDo = {};
	const cloneInProgress = {};
	const cloneDone = {};
	for (let name in tasks) {
		switch (tasks[name]) {
			case "To Do":
				cloneToDo[name] = tasks[name];
				break;
			case "In Progress":
				cloneInProgress[name] = tasks[name];
				break;
			case "Done":
				cloneDone[name] = tasks[name];
				break;
		}
	};
	if (Object.keys(cloneToDo).length === 0 && cloneToDo.constructor === Object) {
		console.log("Nothing to do");
	} else {
		for (let name in cloneToDo) {
			console.log(name + ": " + cloneToDo[name])
		}
	}
	if (Object.keys(cloneInProgress).length === 0 && cloneInProgress.constructor === Object) {
		console.log("Nothing In Progress");
	} else {
		for (let name in cloneInProgress) {
			console.log(name + ": " + cloneInProgress[name])
		}
	}
	if (Object.keys(cloneDone).length === 0 && cloneDone.constructor === Object) {
		console.log("Nothing to Done");
	} else {
		for (let name in cloneDone) {
			console.log(name + ": " + cloneDone[name]);
		}
	}
}

// changeStatus("write a post", "Done") // меняет статус задачи
// console.log(tasks);
// addTask('have a walk'); // добавляет новую задачу
// deleteTask('have a walk'); // удаляет задачу

showList(); // показывает список всех задач