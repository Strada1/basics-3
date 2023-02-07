//toDo лист с возможностями
//чтение, добавление, изменеие, удаление
//хранилище - объект
//имена задач - ключи
//в значениях будут указаны статусы: "In Progress", "Done", "To Do"

const toDo = {
    list: { //список задач со статусами
        "create a new practice task": "In Progress", 
	    "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	    "write a post": "To Do",
    },
    
    changeStatus(task, status) { //смена статуса для задачи
        //проверяем, есть ли такой ключ, который мы передали в функцию
        if (task in this.list) { //Object.list.task(this).length == 0
            this.list[task] = status; 
        }
        else{
            console.log('Такой задачи нет!');
        }
    },

    addTask(newTask) { //добавление задачи с пустым статусом по умолчанию
        //если такая задача уже есть, то не надо добавлять
        if (newTask in this.list) { //Object.list.task(this).length == 0
            console.log('Такая задача уже существует!');
        }
        else{
            this.list[newTask] = ""; //если такой задачи нет в списке, добавим ее с пустым статусом (можно добавить статус по умолчанию)
        }
    },

    deleteTask(deltask) { //удаление какой-либо записи из списка
        //проверка, есть ли такая задача
        if (deltask in this.list) { 
            delete this.list[deltask];
        }
        else{
            console.log('Невозможно удалить задачу. Ее не существует');
        }
    },

    showList() { //показать весь список toDo
        //проверка, есть ли ключи в свойстве list объекта todo (если их нет, значит список с делами пуст)
        if (Object.keys(this.list).length == 0) {
            console.log('Список дел пуст!');
        }
        else{
            let taskCountDone = 0;
            for (const task in this.list){
                //let nameTask = task;
                //let stat = toDo.list[task];
                //вывод в одну строку с предварительным преобразованием элементов в отдельные строчки кода
                //console.log('"' + nameTask + '"' + ": " + stat); //вывести в одну сторку дело и его статус
                //альтернативный вывод в одну строку без предварительного создания строки
                console.log(`\"${task}\": ${this.list[task]}`);
                if (this.list[task] == 'Done'){
                    taskCountDone++;
                }
            }
            if (taskCountDone > 0){
                console.log(`Выполнено задач: ${taskCountDone}`);
            }
            else {
                console.log('Nothing is Done'); //Ничего не сделано
            }
        }
    },
    
    //реализация функции в формате вывода: статус, и все задачи, которые в этом статусе
    showList2() {
        //проверка, есть ли ключи в свойстве list объекта todo (если их нет, значит список с делами пуст)
        if (Object.keys(this.list).length == 0) {
            console.log('Список дел пуст!');
        }
        else {
            let taskCountDone = 0;
            let taskCountTodo = 0;
            let taskCountProgress = 0;
            for (const task in this.list){
                //console.log(`\"${task}\": ${this.list[task]}`);
                if (this.list[task] == 'Done'){
                    taskCountDone++;
                }
                if (this.list[task] == 'To Do'){
                    taskCountTodo++;
                }
                if (this.list[task] == 'In Progress'){
                    taskCountProgress++;
                }
            }
            if (taskCountDone > 0){
                console.log('Done:')
                for (const task in this.list){
                    if(this.list[task] === 'Done') {
                        console.log('    "' + task + '"')
                    }
                }
            }
            else {
                console.log('Done:')
                console.log('    -'); 
            }
            if (taskCountTodo > 0){
                console.log('Todo:')
                for (const task in this.list){
                    if(this.list[task] === 'To Do') {
                        console.log('    "' + task + '"')
                    }
                }
            }
            else {
                console.log('Todo:')
                console.log('    -'); 
            }
            if (taskCountProgress > 0){
                console.log('In Progress:')
                for (const task in this.list){
                    if(this.list[task] === 'In Progress') {
                        console.log('    "' + task + '"')
                    }
                }
            }
            else {
                console.log('In Progress:')
                console.log('    -'); 
            }
        }
    }

}

toDo.showList2(); // показывает список всех задач
toDo.changeStatus("make a bed", "In Progress");
toDo.showList2(); 
toDo.deleteTask("make a bed");
toDo.addTask("create a new practice taskkkkkkkkkk");
toDo.showList2();



// console.log(toDo.list);
// toDo.deleteTask("make a bed");
// toDo.addTask('have a walk');
// console.log(toDo.list);

// toDo.deleteTask("write a post");
// console.log(toDo.list);





// проверить на пустой результат "Nothing is Done"
// function showList2() {
//     console.log('Todo:')
//     for (const key in list){
//         if(list[key] === 'To Do') {
//             console.log('    "' + key + '"')
//         }
//     }
//     console.log('In Progress:')
//     for (const key in list){
//         if(list[key] === 'In Progress') {
//             console.log('    "' + key + '"')
//         }
//     }
//     console.log('Done:')
//     for (const key in list){
//         if(list[key] === 'Done') {
//             console.log('    "' + key + '"')
//         }
//     }
// }
