export{tasks, render }
let tasks = [];
function render() {
	const tasksHigh = document.querySelector('#taskshigh');
	const tasksLow = document.querySelector('#taskslow');
	tasks.forEach(task => {
		if (task.priority === 'high') {
			if (task.status === 'Done') {
				tasksHigh.insertAdjacentHTML('beforeend', `<li id="${task.id}"  class="tasks-todo__task task _active">
			<input class="task__checkbox-input" type="checkbox">
			<label class="task__checkbox-label"></label>
			<p class="task__text"> ${task.name} </p>
			<button type="button" class="button button_remove"></button>
			</li>`)
			} else {
				tasksHigh.insertAdjacentHTML('beforeend', `<li id="${task.id}"  class="tasks-todo__task task">
			<input class="task__checkbox-input" type="checkbox">
			<label class="task__checkbox-label"></label>
			<p class="task__text"> ${task.name} </p>
			<button type="button" class="button button_remove"></button>
			</li>`)
			}
		} else {
			if (task.status === 'Done') {
				tasksLow.insertAdjacentHTML('beforeend', `<li id="${task.id}"  class="tasks-todo__task task _active">
			<input class="task__checkbox-input" type="checkbox">
			<label class="task__checkbox-label"></label>
			<p class="task__text"> ${task.name} </p>
			<button type="button" class="button button_remove"></button>
			</li>`)
			} else {
				tasksLow.insertAdjacentHTML('beforeend', `<li id="${task.id}"  class="tasks-todo__task task">
			<input class="task__checkbox-input" type="checkbox">
			<label class="task__checkbox-label"></label>
			<p class="task__text"> ${task.name} </p>
			<button type="button" class="button button_remove"></button>
			</li>`)
			}
		}
	});
}
