//toDo лист массивы
//Создать массив, в котором будут храниться задачи
//Использовать методы массива чтобы добавлять и удалять задач
//Используйте методы массива чтобы вывести все задачи

let todoArr = [];
const numTask = 1; //количество удаляемых задач
//добавить новую задачу через функцию
function addTask(task, arr, position){
    arr.splice(+position, 0, task); //0 - не удаляем никакую задачу
}
//удалить задачу, принимаем пока, что task точно есть в массиве
function delTask(arr, taskDel){
    let countTask = 0;
    for (const task of arr){
        if(task === taskDel){
            arr.splice(countTask, numTask);
            return;
        }
        countTask++;
    }
}

function showTodoArr(){
    for (const task of todoArr){
        console.log(task);
    }
}
showTodoArr();
todoArr.push("create a new practice task");
todoArr.push("make a bed");
todoArr.push("write a post");
showTodoArr();
addTask("take a shower", todoArr, 2);
delTask(todoArr, "make a bed");
showTodoArr();