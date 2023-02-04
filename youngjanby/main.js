const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}

function changeStatus(quest, progress) {
    list[quest] = progress;
}

function showList() {
    let DoneListCount = 0;
    let InProgressListCount = 0;
    let ToDoListCount = 0;


    for (key in list) {
        if (list[key] === 'Done' && DoneListCount < 1) {
            DoneListCount++;
            console.log(`\n\"${key}\" : ${list[key]}`)
        } else if (list[key] === 'Done' && DoneListCount >= 1) {
            DoneListCount++;
            console.log(`\"${key}\" : ${list[key]}`)
        }
    };


    for (key in list) {
        if(list[key] === 'In Progress' && InProgressListCount < 1) {
            InProgressListCount++;
            console.log(`\n\"${key}\" : ${list[key]}`)
        } else if (list[key] === 'In Progress' && InProgressListCount >= 1) {
            InProgressListCount++;
            console.log(`\"${key}\" : ${list[key]}`)
        }
    };
    
        

    for (key in list) {
        if(list[key] === 'To Do' && ToDoListCount < 1) {
            ToDoListCount++;
            console.log(`\n\"${key}\" : ${list[key]}`)
        } else if (list[key] === 'Done' && ToDoListCount >= 1) {
            ToDoListCount++;
            console.log(`\"${key}\" : ${list[key]}`)
        }
    };
    


            if (ToDoListCount === 0) {
                console.log('\nNothing is \'To Do\'')
            }
            if (DoneListCount === 0) {
                console.log('\nNothing is \'Done\'')
            }
            if (InProgressListCount === 0) {
                console.log('\nNothing is \'In Progress\'')
            }
        }
    
    

function addTask(quest, progress) {
        list[quest] = progress;

        if(list[quest] === undefined) {
            list[quest] = 'In Progress';
        }
}

function deleteTask(quest) {
    delete list[quest]
}





changeStatus("write a post", "Done") // меняет статус задачи
addTask('have a walk'); // добавляет новую задачу
deleteTask('have a walk'); // удаляет задачу
showList(); // показывает список всех задач
