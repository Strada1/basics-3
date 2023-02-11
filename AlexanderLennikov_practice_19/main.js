'use strict';

const list = {
	toDO: {
		"create a new practice task": "In Progress", // создать новое практическое задание": "Выполняется"
		"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
		"write a post": "To Do", //"написать сообщение": "Что нужно сделать"
	},

	addTask(key, status) {
		this.toDO[key] = status;
	},
	changeStatus(key, status) {
		this.toDO[key] = status;
	},
	deleteTask(key, status) {
		delete this.toDO[key];
	},


};

list.addTask('have a walk', "Todo");
list.changeStatus("write a post", "Done");
list.changeStatus("create a new practice task", "Todo");
list.changeStatus("make a bed", "Todo");
list.changeStatus("write a post", "In Progress");
list.deleteTask('have a walk');

function showList() {
	for (const key in list.toDO) {
		console.log(`${(key)} : ${(list.toDO[key])}`);
		if (list.toDO == "To Do" || "In Progress") {
			console.log();
		}
	}
	console.log("Nothing is Done");
};

showList();




// function showListPro(status) {
// 	let count = 0;
// 	for (let key in this.toDO) {
// 		if (list[key] === status) {
// 			console.log('     ' + key);
// 			count++;
// 		}
// 	}
// 	if (count === 0) {
// 		console.log('-')
// 	}

// };

// showListPro();




