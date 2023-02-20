// const tasks =  ['помыть посуду', 'сходить в магазин', 'купить молока', 'убрать в кваритре'];

// const doneTask = tasks.slice(0, 1);
// console.log(doneTask)

// for(let task of tasks) {
//   console.log(task)
// }


// const num = [1, 3 -6, 40, -1, 4 , 11, -16];
// num.forEach((item) => {
//   if(item > 0) {
//     console.log(item)
//   }
// })



// const num = [1, 3, -6, 40, -1, 4 , 11, -16];
// const numFind = num.find(item => item < 0)
// console.log(numFind)

// const users = [
//   {name: 'yura', age: 35},
//   {name: 'inna', age: 28},
//   {name: 'gena', age: 23},
//   {name: 'vasya', age: 31},
//   {name: 'lena', age: 32},
// ]
// const usersName = users.find(user => user.name === 'gena')
// console.log(usersName)
//ищет элемент в массиеве по заданному параметру переданному в функции

// const num = [1, 3, -6, 40, -1, 4 , 11, -16];
// const numFind = num.findIndex(item => item < 0)
// console.log(numFind)
//ищет элемент и возвращает его индекс

// const animals = ['dog', 'cat', 'frog', 'pyton', 'lion'];
// let longWord = animals.filter(item => item.length > 4)
// console.log(longWord)

// const num = [1, 3, -5, -2, 22, 32, 98, -8, 9]
// const otrNumber = num.filter(item => item < 0)
// console.log(otrNumber)

// const num = [1, 3, -5, -2, 22, 32, 98, -8, 9]
// const atNum = num.map(item => Math.abs(item))
// console.log(atNum)

const listTasks = [
  {name: 'сходить в магазин', status: 'не выполнено', priority: 'высокий'},
  {name: 'купить молока', status: 'не выполнено', priority: 'высокий'},
  {name: 'убрать в квартире', status: 'не выполнено', priority: 'средний'},
  {name: 'погулять с котом', status: 'не выполнено', priority: 'низкий'},
  {name: 'вынести мусор', status: 'не выполнено', priority: 'средний'},
]

let inProgressTask;
let doneTask;

// const task = prompt('Выберете задачу');

const changeStatus = (nameTask) => {
  if(nameTask) {
    inProgressTask = listTasks.find(a => a.name === nameTask);
    inProgressTask.status = 'в процессе';
  }
}
changeStatus('купить молока')
console.log(inProgressTask)


// const changeProgress = () => {
//   inProgressTask.forEach((item) => {
//     if(item.status === 'в процессе') {
//       item.status = 'выполнено'
//     }
//   })
// }
// changeProgress()
// console.log(doneTask)

// const showListDoneTasks = () => {
//   for(let task of doneTask) {
//     console.log(task)
//   }
// }
// showListDoneTasks()