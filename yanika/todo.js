//todo list
"use strict"
const toDo = "to do";
const inProgress = 'in progress';
const done = 'done'

const todoList = [
    {
        task: "brush your teeth",
        status: toDo
    },
    {
        task: "make a bed",
        status: inProgress
    },
    {
        task: "walk the dog",
        status: done
    }
]
//ф-я которая изменяет статус 
function changeStatus(task, status) {
    todoList.find(function (todoList) {
        if (todoList.task === task) {
            todoList.status = status
            console.log(`такое задания, как "${task}", было найдено и статус изменен на '${status}'`);
            return todoList;
        } else if (todoList.task !== task) {
            console.log(`нет такого задания, как "${task}"`);
            return todoList;
        }
    }
    )
}
//ф-я которая удаляет задачу
function deleteTask(task) {
    for (let i = todoList.length; i--;) {
        if (todoList[i].task === task) {
            console.log(`задаиние "${task}" было успешно удалено`)
            return todoList.splice(i, 1);
        }
    }
}
//ф-я которая показывает список задачь по статусу
function showList() {
    console.log('To Do:');
    for (const show of todoList) {

        if (show.status === toDo) {
            console.log(`  ${show.task};`);
        };
    };
    console.log('In Progress:');
    for (const show of todoList) {

        if (show.status === inProgress) {
            console.log(`  ${show.task};`);
        };
    };
    console.log('Done:');
    for (const show of todoList) {

        if (show.status === done) {
            console.log(`  ${show.task};`);
        };
    };
}
//ф-я которая добавляет задачу с дефолтным статусом "в прогрессе"
function addTask(nameTask) {
    const newtask = { task: "", status: inProgress }
    newtask.task = nameTask
    todoList.push(newtask)
    console.log(`задача "${nameTask}" была успешно добалена`)
}

showList();
changeStatus("brush your teeth", toDo);
console.log(todoList);

deleteTask('brush your teeth');
console.log(todoList);

addTask("run a kilometer");

console.log(todoList);


