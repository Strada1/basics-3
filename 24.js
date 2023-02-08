let toDoList = ['почитать', 'помыть посуду', 'сделать задачу Старада', 'выкинуть мусор'];

let lastItem = toDoList.pop();
let firstItem = toDoList.shift();
let deletedTask = String(toDoList.splice(0, 1));

let doneTask = [lastItem, firstItem, deletedTask];

function showList(toDoList) {
    for (const task of toDoList) {
        console.log(task);
      };
};

console.log("Сделано "+ doneTask.length + " :");
showList(doneTask);
console.log('\n');

toDoList.push('оплатить счета');
toDoList.unshift('разобрать почту');

let tasksCount = toDoList.length;

console.log("Количество дел "+ tasksCount + " :");
showList(toDoList);

