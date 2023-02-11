//toDo лист с возможностями 
//чтение, добавление, изменеие, удаление
//хранилище - массив
//имена задач - ключи name в каждом объекте
//в значениях будут указаны статусы: "In Progress", "Done", "To Do"
//https://learn.javascript.ru/array-methods

const STATUSES = { //пространство имен задаем, когда есть изначально известные часто используемые в коде данные (строки, числа)
    TO_DO: 'To Do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}; 

const PRIORIRTIES = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
}

const statusDefault = 'To Do';

let todoArr = [ 
    {name: 'create a new practice task', status: STATUSES.IN_PROGRESS, priority: PRIORIRTIES.HIGH}, 
    {name: 'create a new practice task №2', status: STATUSES.IN_PROGRESS, priority: PRIORIRTIES.HIGH}, 
    {name: 'make a bed', status: STATUSES.DONE, priority: PRIORIRTIES.HIGH}, 
    {name: 'make a bed2', status: STATUSES.DONE, priority: PRIORIRTIES.LOW},
];

function isValidTask(arr, taskInTodoArr){ //проверка, есть ли такая задача в массиве todoArr
    return arr.find(element => element.name === taskInTodoArr);
}

function isValidStatus(inputStatus){ //проверка, есть ли такая задача в массиве todoArr
    return inputStatus === STATUSES.DONE || inputStatus === STATUSES.IN_PROGRESS || inputStatus === STATUSES.TO_DO;
}

function changeStatus(arr, taskInTodoArr, newStat) {
    //если задачи такой нет, вывести сообщение об этом    
    if (!isValidTask(arr, taskInTodoArr) || !isValidStatus(newStat)){ 
        console.log('Такой задачи/статуса не существует!');
    } else { //иначе найти задачу по name и по ключу status изменить статус
        arr[arr.findIndex(element => element.name == taskInTodoArr)].status = newStat;
    }
}

function addTask(arr, newTask, prior){
    //добавить задачу, если такой еще нет
    //если есть, сообщить что такая уже есть
    if (arr.find(element => element.name === newTask)){ 
        console.log('Такая зачача уже есть!');
    } else { //иначе добавить задачу
        let newTaskObj = {name: newTask, status: PRIORIRTIES.TO_DO, priority: prior};
        arr.push(newTaskObj);
    }
}

function deleteTask(arr, delTask){
    //проверить, есть ли задача для удаления
    if (!isValidTask(arr, delTask)){
        console.log('Такой задачи не существует!');
    } else { // удалить задачу
        let delTaskConsole = arr.splice(arr.findIndex(element => element.name == delTask), 1);
        console.log(`Задача "${delTaskConsole[0].name}" успешно удалена`);
    }
}
   
//реализация функции в формате вывода: статус, и все задачи, которые в этом статусе
function showTodo(arr) {
    //проверка, есть ли ключи в свойстве list объекта todo (если их нет, значит список с делами пуст)
    if (arr.length === 0) {
        console.log('Список дел пуст!');
    }
    else {
        for(let prop in STATUSES){
            const arrDone = arr.filter(element => element.status === STATUSES[prop]);
            //console.log(arrDone); 
            if (arrDone.length === 0) {
                console.log(`${STATUSES[prop]}:`) //вместо console.log('    -'); можно добавить в кавычки:  \n    -
                console.log('    -'); 
            } else {
                console.log(`${STATUSES[prop]}:`)
                arrDone.forEach(element => {    
                    console.log(`    "${element.name}", "${element.priority}"`) 
                });
            }
        } 
    }
}

showTodo(todoArr);
changeStatus(todoArr, 'create a new practice task', 'Doneee');
showTodo(todoArr);
changeStatus(todoArr, 'create a new practice task', 'Done');
addTask(todoArr, 'take a shower', 'high'); //'take a shower'
showTodo(todoArr);
deleteTask(todoArr, 'create a new practice taskkk');
showTodo(todoArr);
deleteTask(todoArr, 'create a new practice task');
showTodo(todoArr);
