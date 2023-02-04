const toDo = {
    list: {
        "coocked the dinner": 'to do' ,
        "make a bed": 'done',
        "write a task": 'in progress',
        "buy food": 'done',
        "cleaning up": 'to do'
    },

}

function addTask (key, status) {
    if (key in toDo.list) {
        console.log ("Такая задача уже есть")
    } else {
        toDo.list[key] = status
        console.log("Задача", (key), "добавлена")
    }
}

function deleteTask (key) {
    if (key in toDo.list) {
        delete toDo.list[key];
        console.log ("Задача", (key), "удалена") ;
    }   else {
        console.log ("Такой задачи нет в списке");
    }
}

function changeStatus (key, status) {
    if (key in toDo.list) {
        toDo.list[key] = status;
        console.log("Статус задачи", (key), "изменен на", (status))
    } else {
        console.log("Задача не найдена")
    }
}

function showList () {
    console.log (toDo.list)
}

addTask("cleaning up", "done")
addTask("watch film", "to do")
deleteTask("make a bed")
deleteTask("wash the dishes")
changeStatus("write a task", "done")
showList()