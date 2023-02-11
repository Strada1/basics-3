const list = [
    { name: 'Make a bed', status: 'In progress', priority: 'Low' },
    { name: 'Create a task', status: 'In Progress', priority: 'High' },
    { name: 'Write a post', status: 'To Do', priority: 'Low' },
    { name: 'Wash a car', status: 'In Progress', priority: 'High' },
    { name: 'Have a walk', status: 'Done', priority: 'High' },
];

// Добавление объекта в массив
function addTask(nameText, statusText, priorityText) {
    list.push({ name: nameText, status: statusText, priority: priorityText });


}
// Удаление объекта из массива
function deleteTask(taskName) {
    for (const x of list) {
        if (x.name === taskName) {
            list.splice(list.indexOf(x), 1);
            break;
        }
    }
}

//Изменение статуса у объекта, находящийся в массиве
function changeStatus(taskName, status) {
    for (const x of list) {
        if (x.name === taskName) {
            x.status = status;
            break;
        }
    }

}

// //Сортировка объектов в массиве по статусу приоритета
function rangeStatus(a, b) {
    if (a.priority === b.priority) {
        return 0;
    }
    return a.priority === "Low" && b.priority !== 'Low' ? -1 : 1

}



console.log('__________________________________________');
console.log('Add new task');
addTask('Go to the cinema', 'In progress', 'Low');
console.log(list);
console.log('__________________________________________');


console.log('__________________________________________');
console.log('Delete task');
deleteTask('Write a post');
console.log(list);
console.log('__________________________________________');

console.log('__________________________________________');
console.log('Chage status');
changeStatus('Have a walk', 'In Progress');
console.log(list);
console.log('__________________________________________');



console.log('__________________________________________');
console.log('Sort list');
list.sort(rangeStatus);
console.log(list);
console.log('__________________________________________');


