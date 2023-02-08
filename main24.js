let toDoList = ['проснуться', 'позавтракать', 'прогреть машину', 'доехать до работы', 'сформировать отчеты'];
let tasksCount = toDoList.length;

for (const task of toDoList) {
console.log(task);
};
console.log(tasksCount + ' дел запланировано');

// Доступ к элементу
const toDoList1 = ['проснуться', 'позавтракать', 'прогреть машину', 'доехать до работы', 'сформировать отчеты'];
const firstElement = toDoList1[0]; // 'проснуться'
const lastElement = toDoList1[toDoList1.length - 1]; // 'сформировать отчеты'

console.log ('1) ' + firstElement);
console.log ('5) ' + lastElement);


// Замена элемента
let toDoList2 = ['проснуться', 'позавтракать', 'прогреть машину', 'доехать до работы', 'сформировать отчеты'];
toDoList2[2] = 'прогуляться';
console.log(toDoList2); // ['проснуться', 'позавтракать', 'прогуляться', 'доехать до работы', 'сформировать отчеты'];
