//TODO newRoadmap #3
const STATUS = {
	TODO: 'To Do',
	IN_PROGRESS: 'In Progress',
	DONE: 'Done',
}

const PRIORITY = {
	LOW: 'Low',
	HIGH: 'High',
}
function validStatus(status){
	return status = status === STATUS.TODO || status === STATUS.IN_PROGRESS || status === STATUS.DONE;
}
function validPriority(priority){
	return priority = priority === PRIORITY.LOW || PRIORITY.HIGH;
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
		if(validStatus(newStatus) && validPriority(newPriority)){
			checkTaskStatus.status = newStatus,
			checkTaskStatus.priority = newPriority;
		}else{
			console.log(`\tУпс такого статуса ИЛИ приоритета не сушествует, проверьте правильность.`);
		}
	}
}
let fullTasks;
function checkingStatusShowList(checkStatus){
	 fullTasks = list.filter(item => {
		if(item.status === checkStatus) {
		 console.log(`\t ${item.name} | ${item.priority}`);
		}
	 });
}

function showList(){
	console.log(`To Do`);
	if(checkingStatusShowList('To Do')){
		console.log(fullTasks);
	}
	console.log(`In Progress`);
	if(checkingStatusShowList('In Progress')){
		console.log(fullTasks);
	}
	console.log(`Done`);
	if(checkingStatusShowList('Done')){
		console.log(fullTasks);
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

