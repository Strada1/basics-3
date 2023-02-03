const list = {
	'Пойти на пары': 'To Do',
	'Поесть оливье': 'In Progress',
	'Помыть посуду': 'Done',
}

function addTask(task){
	for(const key in list){
		if(key === task){
			console.log('Упс... Такая задача уже имеется в списке');
		}else{
			list[task] = 'To Do';
		}
	}
}

function deleteTask(task){
	if(task in list){
			delete list[task];
	}else{
		console.log('Упс... Такой задачи нет, не смогу удалить)');
	}
}

function changeStatus(task, status){
	if(task in list && (status === 'To Do' || status === 'In Progress' || status === 'Done')){
		list[task] = status;
	}else{
		console.log('Упс... Не нашел такую задачу или такой статус. Проверьте данные');
	}
}

// function showList(){
// 	for(const key in list){
// 		if(list[key] === 'To Do') console.log(`'${key}': ${list[key]}`);
// 	}
// 	for(const key in list){
// 		if(list[key] === 'In Progress') console.log(`'${key}': ${list[key]}`);
// 	}
// 	for(const key in list){
// 		if(list[key] === 'Done') console.log(`'${key}': ${list[key]}`);
// 	}
// }

function showList(){
	console.log('Todo:');
	for(const check in list){
		if(list[check] === 'To Do'){
			console.log(`\t ${check}`);
		}
	}
	console.log('In Progress:');
	for(const check in list){
		if(list[check] === 'In Progress'){
			console.log(`\t ${check}`);
		}
	}
	console.log('Done:');
	for(const check in list){
		if(list[check] === 'Done'){
			console.log(`\t ${check}`);
		}
	}
}

// //? add
addTask('Я тебя удалю');
addTask('Поиграть с котом');

//? delete
deleteTask('Я тебя удалю');

//? change
changeStatus('Поиграть с котом', 'Done')

//?show
showList();




