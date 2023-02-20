let toDoList = ['Погулять', 'Почитать', 'Повторить JS', 'Подготовиться к работе', 'Держать диету']

toDoList.pop(); // Delete the last element
toDoList.push('Покушать чипсы в воскресенье') // Add a new element to the list

for (task of toDoList) {
	console.log(task);
}