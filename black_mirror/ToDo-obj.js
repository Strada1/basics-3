const list = {
	"write a letter": "To Do",
	"create a new practice ": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
	"make a video": "Done",
}

const STATUS = {
	TO_DO: "To Do",
	DONE: "Done",
	IN_PROGRESS: "In Progress",
	DEFAULT_STATUS: "To Do",
}

const ERRORS = {
	NOT_EXIST: ": такой задачи нет в списке",
	NOT_FOUND: "Nothing is ",
}


function changeStatus(task, status) {
	if (list[task]) {
		list[task] = status;
	} else
		console.log(task + ERRORS.NOT_EXIST);
}

function addTask(task) {
	list[task] = STATUS.DEFAULT_STATUS;
}

function deleteTask(task) {
	if (list[task]) {
		delete list[task];
	} else
		console.log(task + ERRORS.NOT_EXIST);

}

function showList() {
	for (const task in list) {
		if (list[task] === STATUS.TO_DO) {
			console.log(`"${task}": ${list[task]}`);
		}

	}
	for (const task in list) {
		if (list[task] === STATUS.IN_PROGRESS) {
			console.log(`"${task}": ${list[task]}`);
		}
	}
	for (const task in list) {
		if (list[task] === STATUS.DONE) {
			console.log(`"${task}": ${list[task]}`);
		}

	}
}



function showList_bonus(todoList) {
	const tasks = {
		[STATUS.TO_DO]: '',
		[STATUS.IN_PROGRESS]: '',
		[STATUS.DONE]: '',
	}
	const noTasks = '-';

	for (const task in todoList) {
		tasks[todoList[task]] += ` "${task}"\n`;
	}

	return `Todo:\n${tasks[STATUS.TO_DO] || noTasks}\nIn Progress :\n${tasks[STATUS.IN_PROGRESS] || noTasks}\nDone:\n${tasks[STATUS.DONE] || noTasks}`;
}




changeStatus("write a post", "Done");
changeStatus("write222 a post", "Done"); //write222 a post: Такой задачи нет в списке
addTask("go for a walk");
addTask("have a walk");
deleteTask("have a walk");
deleteTask("have a333 walk"); //have a333 walk: Такой задачи нет в списке
showList();
console.log(showList_bonus(list));