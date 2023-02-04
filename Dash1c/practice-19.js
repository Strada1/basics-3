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
    if (key in list) {
        console.log ("Такая задача уже есть")
    } else {
        list[key] = status
        console.log("Новая задача добавлена")
    }
}



function deleteTask (key) {
    if (key in list) {
        delete list[key];
        console.log ("Задача удалена") ;
    }   else {
        console.log ("Такой задачи нет в списке");
    }
}

function changeStatus (key, status) {
    if (key in list) {
        list[key] = status;
        console.log("Статус задачи изменен")
    } else {
        console.log("Задача не найдена")
    }
}

function showList () {
    console.log (toDo.list)
}

deleteTask("make a bed")
showList()

