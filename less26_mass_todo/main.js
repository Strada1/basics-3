//toDo лист с возможностями 
//чтение, добавление, изменеие, удаление
//хранилище - массив
//имена задач - ключи name в каждом объекте
//в значениях будут указаны статусы: "In Progress", "Done", "To Do"

const arrStatus = ['In progress', 'Done', 'To Do'];

let todoArr = [ 
    {name: 'create a new practice task', status: 'In progress', priority: 'high'}, 
    {name: 'create a new practice task №2', status: 'In progress', priority: 'high'}, 
    {name: 'make a bed', status: 'Done', priority: 'high'}, 
    {name: 'make a bed2', status: 'Done', priority: 'low'},
];

function changeStatus(arr, task, stat) {
    //найти задачу по name и по ключу status изменить статус
    //если задачи такое нет, вывести сообщение об этом
    let flagTask = true;
    arr.forEach(element => {
        if(element.name === task){
            element.status = stat;
            flagTask = false;
        }  
    });
    if (flagTask){
        console.log('Такой задачи не существует!');
    }
}

function addTask(arr, newTask, prior){
    //добавить задачу, если такой еще нет
    //если есть, сообщить что такая уже есть
    let flagTask = true;
    arr.forEach(element => {
        if(element.name === newTask){
            console.log('Такая зачача уже есть!')
            flagTask = false;
        }  
    });
    if (flagTask){
        let newTaskObj = {};
        newTaskObj.name = newTask;
        newTaskObj.status = 'To Do'; //по умолчанию To Do
        newTaskObj.priority = prior;
        arr.push(newTaskObj);
    }
}

function deleteTask(arr, delTask){
    //удалить задачу, если такая есть
    //в противном случае уведомить о том, что такой задачи нет
    let flagTask = true;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name === delTask){
            let delTaskConsole = arr.splice(i, 1);
            flagTask = false;
            console.log(`Задача "${delTaskConsole[0].name}" успешно удалена`);
        }
    }
    if (flagTask){
        console.log('Такой задачи не существует!');
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
                console.log(`${stat}:`)
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
addTask(todoArr, 'take a shower', 'high')
showTodo(todoArr);
showTodo(todoArr);
deleteTask(todoArr, 'create a new practice task');
showTodo(todoArr);