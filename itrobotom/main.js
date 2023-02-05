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
    
    changeStatus(task, status) {
        //!!!!!!!проверить, не пуст ли список, точнее есть ли такая задача, а если обратимся к ней, а ее нет..
        this.list[task] = status; 
    },

    addTask(newTask) { //добавление задачи с пустым статусом по умолчанию
        this.list[newTask] = ""; //можно сделать задачу не пустой, а со статусом To Do
    },

    deleteTask(deltask) { //удаление какой-либо записи из списка
        delete this.list[deltask]; //delete this.list.Alex; // с точкой не получится удалить свойство, если оно состоит из более одного слова с пробелом
    },

    showList() { //показать весь список toDo
        //!!!!!!проверить, не пуст ли список, чтобы не выводить пустоту
        for (const task in this.list){
            let nameTask = task;
            let stat = toDo.list[task];
            //вывод в одну строку с предварительным преобразованием элементов в отдельные строчки кода
            //console.log('"' + nameTask + '"' + ": " + stat); //вывести в одну сторку дело и его статус
            //альтернативный вывод в одну строку без предварительного создания строки
            console.log(`\"${task}\": ${this.list[task]}`);
        }
    }
}

toDo.showList(); // показывает список всех задач
toDo.deleteTask("make a bed");
toDo.showList();


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
