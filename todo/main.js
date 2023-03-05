
import { deleteNewTasks } from './cleaning.js'
import { tasks, render } from './render.js'


let numId = 0;
const buttonsAdd = document.querySelectorAll('.button');
function addTask(e) {
	const inputHigh = document.querySelector('.todo__input_high').value;
	const inputLow = document.querySelector('.todo__input_low').value;
	deleteNewTasks()

	if (inputHigh) {
		if (e.target.classList.contains('button_high')) {
			add(inputHigh, 'To Do', 'high', ++numId);
			document.querySelector('.todo__input_high').value = ''
		}
	}
	if (inputLow) {
		if (e.target.classList.contains('button_low')) {
			add(inputLow, 'To Do', 'low', ++numId);
			document.querySelector('.todo__input_low').value = ''
		}
	}
	render()
	console.log(tasks);
	e.preventDefault();
}
buttonsAdd.forEach(buttonAdd => {
	buttonAdd.addEventListener("click", addTask);
});
function add(nameTask, status, priority, id) {
	tasks.push({ name: nameTask, status, priority, id });
}


function changeStatus(e) {
	if (e.target.classList.contains('task__checkbox-label')) {
		deleteNewTasks()
		const parentEl = e.target.closest('.task');
		const parentElId = parentEl.id
		const taskStat = tasks.filter(idNumber => idNumber.id === +parentElId)

		taskStat.find(st => {
			if (st.status !== 'Done') {
				st.status = 'Done'
				parentEl.classList.add('_active')
			} else {
				st.status = 'To Do'
				parentEl.classList.remove('_active')
			}
		})
		console.log(tasks);
		render()
	}
}
document.addEventListener("click", changeStatus);


export function deleteTask(e) {
	if (e.target.classList.contains('button_remove')) {
		deleteNewTasks()
		const parentEl = e.target.closest('.task')
		const parentElId = parentEl.id;

		const indx = tasks.findIndex(idNumber => idNumber.id === +parentElId)
		if (indx !== -1) {
			tasks.splice(indx, 1);
			console.log(tasks);
		};
		render()
	}
}
document.addEventListener("click", deleteTask);



