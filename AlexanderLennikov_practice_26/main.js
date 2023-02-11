const list = [
	{ name: 'Создать ТoDo на массивах', status: 'Выполняется', priority: 'высокий' },
	{ name: 'Использовать методы массива чтобы добавлять задачи, 2 варианта', status: 'Выполняется', priority: 'средний' },
	{ name: 'Использовать методы массива чтобы удалять задачи', status: 'Выполняется', priority: 'средний' },
	{ name: 'Использовать методы массива чтобы менять задачи', status: 'Выполняется', priority: 'средний' },
	{ name: 'Использовать методы массива чтобы выводить задачи', status: 'Выполняется', priority: 'средний' }
];



list[3] = { name: 'Использовать методы массива чтобы менять задачи', status: 'Сделано', priority: 'средний' };
list.splice(2, 0, { name: 'Использовать методы массива чтобы добавлять задачи, 1 вариант', status: 'Сделано', priority: 'средний' });
list.push({ name: 'Использовать методы массива чтобы добавлять задачи, 2 вариант', status: 'Сделано', priority: 'средний' });
list[1] = { name: 'Использовать методы массива чтобы добавлять задачи, 2 варианта', status: 'Сделано', priority: 'средний' };
const deleteTask = list.splice(2, 3);
list[2] = { name: 'Использовать методы массива чтобы выводить задачи', status: 'Сделано', priority: 'средний' };

for (const name of list) {
	console.log(name);
}

const taskName = list.map(task => task.name);
console.log(taskName);

const string = taskName.join(';\n\n');
console.log(string);
