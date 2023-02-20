// Три способа создать массив в JS:
let toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
let toDoListArray = Array.of('почитать', 'помыть посуду', 'помыть машину');
let toDoListNewArray = new Array('почитать', 'помыть посуду', 'помыть машину');

// Свойство без ()

let tasksCount = toDoList.length;
console.log(tasksCount); // 3
let first = toDoList[0]; // 'почитать'
let last = toDoList[tasksCount - 1]; // 'помыть машину'
console.log(first);
console.log(last);

//! push(), unshift(), pop(), shift() 
const numbers = [1000, 7, 666];
numbers.push(22); // Добавить элемент в конец массива
console.log(numbers); // [ 1000, 7, 666, 22 ]

numbers.pop(); // Удалить последний элемент
console.log(numbers); //[ 1000, 7, 666 ]

numbers.shift(); // Удалить первый элемент из массива
console.log(numbers); // [ 7, 666 ]

numbers.unshift(999); // Добавить новый элемент в начало массива
console.log(numbers); // [ 999, 7, 666 ]

//! slice() - удалит и вернет, splice() - удалять, менять, возвращать и т.д.

let toDo = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
let firstTwoTasks = toDo.slice(0, 2) // от 0-го до 1-го индекса, [0][1], 2 невключительно 
console.log(firstTwoTasks); // [ 'почитать', 'помыть посуду' ]

let myTask = ['погулять', 'почитать', 'убраться']
let deleted = myTask.splice(1, 2) // 1 - индекс элемента, откуда мы удаляем, 2 - сколько удалить от элемента включительно
console.log(deleted); // [ 'почитать', 'убраться' ]

let digits = [1, 2, 3, 8, 9] // числа 4, 5, 6, 7 утеряны. Их можно вставить внутрь массива с помощью splice()
digits.splice(3, 0, 4, 5, 6, 7) // 3 -> индекс, 0 - сколько удалить, 4, 5, 6, 7 - что добавить от 3-го индекса включительно
console.log(digits); // 1, 2, 3, 4, 5, 6, 7, 8, 9 	

let phones = ['Айфон', 'Самсунг', 'Сяоми', 'Мейзу']

for (const phone of phones) {
	console.log(phone);
}

/* Shift + Alt + A; output: 
	Айфон
	Самсунг
	Сяоми
	Мейзу
*/