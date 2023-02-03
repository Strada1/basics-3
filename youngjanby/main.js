const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}

function changeStatus(quest, progress) {
    list[quest] = progress;
}

function showList(quest ,progress) {
    if(list[quest] == 'done') {
        сonsole.log(list[quest] == 'done')
    } else if(list[quest] == 'In Progress') {
        console.log(/nlist[quest] == 'In progress')
    } else if(list[quest] == 'To Do') {
        console.log(/n/nlist[quest] == 'To Do')
    }
    }

function addTask(quest, progress) {
        list[quest] = progress;

        if(list[quest] == undefined) {
            list[quest] = 'in progress';
        }
}

function deleteTask(quest) {
    delete list[quest]
}



changeStatus("write a post", "Done") // меняет статус задачи
addTask('have a walk'); // добавляет новую задачу
deleteTask('have a walk'); // удаляет задачу
showList(); // показывает список всех задач

