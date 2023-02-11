//toDo лист с возможностями 
//чтение, добавление, изменеие, удаление
//хранилище - массив
//имена задач - ключи name в каждом объекте
//в значениях будут указаны статусы: "In Progress", "Done", "To Do"

const arrStatus = ['In progress', 'Done', 'To Do'];
const statusDefault = 'To Do';

let todoArr = [ 
    {name: 'create a new practice task', status: 'In progress', priority: 'high'}, 
    {name: 'create a new practice task №2', status: 'In progress', priority: 'high'}, 
    {name: 'make a bed', status: 'Done', priority: 'high'}, 
    {name: 'make a bed2', status: 'Done', priority: 'low'},
];

function changeStatus(arr, taskInTodoArr, newStat) {
    //если задачи такой нет, вывести сообщение об этом    
    if (arr.find(element => element.name === taskInTodoArr) === undefined){ //(!(arr.includes(arr.name) === taskInTodoArr)){
        console.log('Такой задачи не существует!');
    } else { //иначе найти задачу по name и по ключу status изменить статус
        arr[arr.findIndex(element => element.name == taskInTodoArr)].status = newStat;
    }
}

function addTask(arr, newTask, prior){
    //добавить задачу, если такой еще нет
    //если есть, сообщить что такая уже есть
    if (arr.find(element => element.name === newTask)){ //(!(arr.includes(arr.name) === taskInTodoArr)){
        console.log('Такая зачача уже есть!');
    } else { //иначе добавить задачу
        let newTaskObj = {};
        newTaskObj.name = newTask;
        newTaskObj.status = statusDefault; //по умолчанию To Do
        newTaskObj.priority = prior;
        arr.push(newTaskObj);
    }
}

function deleteTask(arr, delTask){
    //проверить, есть ли задача для удаления
    if (!(arr.find(element => element.name === delTask))){
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
        arrStatus.forEach(stat => {
            const arrDone = arr.filter(element => element.status === stat);
            //console.log(arrDone); 
            if (arrDone.length === 0) {
                console.log(`${stat}:`) //вместо console.log('    -'); можно добавить в кавычки:  \n    -
                console.log('    -'); 
            } else {
                console.log(`${stat}:`)
                arrDone.forEach(element => {    
                    console.log(`    "${element.name}", "${element.priority}"`) 
                });
            }
        });     
    }
}

showTodo(todoArr);
changeStatus(todoArr, 'create a new practice task', 'Done');
addTask(todoArr, 'take a shower', 'high'); //'take a shower'
showTodo(todoArr);
showTodo(todoArr);
deleteTask(todoArr, 'create a new practice task');
showTodo(todoArr);