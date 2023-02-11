//TODO razvalnuy #26
const STATUS = {
	TODO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
}

const PRIORITY = {
	LOW: 'Low',
	HIGH: 'High',
}

const list = [ 
	{name: 'Убрать носки', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW}, 
	{name: 'Погладить белье', status: STATUS.DONE, priority: PRIORITY.HIGH},
];

function addTask(task = undefined){
	const checkAddTask = list.find(item => item.name === task);
	const checkUndefined = list.find(() => task ===  undefined);
	if(!(checkAddTask || checkUndefined)){
		if(!Number.isFinite(task)){
			list.push({name: task, status: STATUS.TODO, priority: PRIORITY.LOW});
		}
		else{
			console.log(`\tЕррор вы ввели число! Если нужно число, то оберни кавычки.`);
		}
	}else{
		console.log(`\tЭто пустая задача? Или такая задача есть`)
	}
}

function deleteTask(task){
	const checkDeleteTask = list.findIndex(item => item.name === task);
	if(checkDeleteTask > 0){
		list.splice(checkDeleteTask, 1);
	}else{
		console.log(`\tУпс, такой задачи нет, попробуй правильно ввести данные`);
	}
}

function changeStatus(task, newStatus, newPriority){
	const checkTaskStatus = list.find(item => item.name === task);
	if(!checkTaskStatus){
		console.log(`\tУпс такой задачи нет, чтобы поменять ей статус ИЛИ приоритет проверьте правильность.`);
	}else{
		if((newStatus === 'To Do' || newStatus === 'In Progress' || newStatus === 'Done') && (newPriority === 'Low' || newPriority === 'High')){
			checkTaskStatus.status = newStatus,
			checkTaskStatus.priority = newPriority;
		}else{
			console.log(`\tУпс такого статуса ИЛИ приоритета не сушествует, проверьте правильность.`);
		}
	}
}

function showList(){
	console.log(`To Do`);
	const checkListToDo = list.filter(item => item.status === 'To Do');
	if(checkListToDo){
		console.log(checkListToDo);
	}
	console.log(`In Progress`);
	const checkListIn = list.filter(item => item.status === 'In Progress');
	if(checkListIn){
		console.log(checkListIn);
	}
	console.log(`Done`);
	const checkListDone = list.filter(item => item.status === 'Done');
	if(checkListDone){
		console.log(checkListDone);
	}
}
//? addTask
addTask('Поесть пиццу');
addTask('Поиграть в пабг');
addTask('Собрать кубика рубика')


//? deleteTask
deleteTask('Погладить белье');

//? changeStatus
changeStatus('Убрать носки', STATUS.DONE, PRIORITY.HIGH);
changeStatus('Поиграть в пабг', STATUS.IN_PROGRESS, PRIORITY.HIGH);

//?showList
showList()