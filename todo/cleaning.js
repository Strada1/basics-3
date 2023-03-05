export function deleteNewTasks() {
	const newTasks = document.querySelectorAll('.task');
	if (newTasks) {
		newTasks.forEach(newTask => {
			newTask.remove()
		});
	}
}