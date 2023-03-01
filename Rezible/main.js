import {changeStatus, addTask as todoAddTask, deleteTask} from './todo.js'
import {inputHighTask, highPriority, btnHighTask, inputLowTask, lowPriority, btnLowTask} from './view.js'
import {STATUSES, PRIORITIES, list} from './constObjects.js'
btnHighTask.addEventListener('click', (event) => addTask(event));
inputHighTask.addEventListener('keypress', (event) => addTask(event)); 
btnLowTask.addEventListener('click', (event) => addTask(event));
inputLowTask.addEventListener('keypress', (event) => addTask(event)); 
function addTask(event){
	let element = event.target.id;
	let highTaskText = inputHighTask.value;
	let lowTaskText = inputLowTask.value;
	switch (element){
		case "inputHighTask":
			if (event.key === 'Enter') {
				event.preventDefault();
				if(!isValid(inputHighTask)) return;
				todoAddTask(highTaskText, PRIORITIES.HIGH)
				render()
			}
			break;
		case "inputLowTask":
			if (event.key === 'Enter') {
				event.preventDefault();
				if(!isValid(inputLowTask)) return;
				todoAddTask(lowTaskText, PRIORITIES.LOW)
				render()
			}
			break;
		case "addHighTask":
			event.preventDefault();
			if(!isValid(inputHighTask)) return;
			todoAddTask(highTaskText, PRIORITIES.HIGH)
			render()
			break;
		case "addLowTask":
			event.preventDefault();
			if(!isValid(inputLowTask)) return;	
			todoAddTask(lowTaskText, PRIORITIES.LOW)
			render()
			break;
	}
}
function isValid(inputPriorityTask){
	let inputPriorityTaskText = inputPriorityTask.value;
	if(inputPriorityTaskText === ""){
		inputPriorityTask.placeholder = "Нельзя добавить пустую задачку!"
		inputPriorityTask.classList.add("error");
		inputPriorityTask.disabled = true;
		inputPriorityTask.disabled = false;
		return false;
	}
	inputPriorityTask.placeholder = "Добавить";
	inputPriorityTask.classList.remove("error");
	inputPriorityTask.value = "";
	return true;
}
function render(){
	highPriority.textContent = "";
	lowPriority.textContent = "";
	list.forEach(list => {
		if(list.priority === PRIORITIES.HIGH){
			createElement(list.priority, list.name , list.uniqId)
		}
		if(list.priority === PRIORITIES.LOW){
			createElement(list.priority, list.name, list.uniqId)
		}
	  });
}
function createElement(priority, taskName, uniqId){
	switch (priority){
		case PRIORITIES.HIGH:
			priority = highPriority;
			break;
		case PRIORITIES.LOW:
			priority = lowPriority;
			break;
	}
	const newDiv = document.createElement('div');
	const newInput = document.createElement('input');
	const newLabel = document.createElement('label')
	const newBtn = document.createElement('button')
	const taskStatus = list.find(tasks => tasks.uniqId === uniqId);
	newDiv.classList.add('task')
	newInput.setAttribute('type', 'checkbox')
	newInput.setAttribute('id', 'task')
	newDiv.appendChild(newInput);
	newLabel.textContent = taskName;
	newDiv.appendChild(newLabel);
	newBtn.classList.add("task-remove");
	newDiv.appendChild(newBtn);
	priority.appendChild(newDiv);
	if(taskStatus.status === STATUSES.DONE){
		newDiv.classList.add("task-done")
	}
	newInput.addEventListener('click', () => taskDone(taskStatus, newInput, uniqId))
	newBtn.addEventListener('click', function removeTask(){
		deleteTask(uniqId)
		render()
		newDiv.remove();
		newBtn.removeEventListener('click', removeTask);
	});
}
function taskDone(taskStatus, newInput, uniqId){
	if(newInput.checked && taskStatus.status !== STATUSES.DONE){
		changeStatus(uniqId, STATUSES.DONE)
		render()
		return 
	}
	changeStatus(uniqId, STATUSES.TO_DO)
	render()
}