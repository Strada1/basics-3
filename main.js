let tasksList = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];

//замена 
tasksList[1] = "помыть собаку";
console.log(tasksList);

//вставка вначале
tasksList.unshift("Выхдоровить");
console.log(tasksList);

//добавить элемент
tasksList.push("написать цели");
console.log(tasksList);

//вырезать последний элмент
let lastItem = tasksList.pop();
tasksList.pop();
console.log(tasksList);
console.log(lastItem);

//вырезать первый элемент
let firstItem = tasksList.shift();
console.log(tasksList);
console.log(firstItem);

//копировать несколько эелемнтов массива
let trashTask = tasksList.slice(0,2);
console.log(trashTask);
console.log(tasksList);

//заменяю элементы массива
let newTasks = tasksList.splice(1,3, "посмотреть футбол", "поиграть");
console.log(newTasks);
console.log(tasksList);