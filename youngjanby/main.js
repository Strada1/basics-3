const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}

function changeStatus(quest, progress) {
    list[quest] = progress;
}

function showList() {
    let i = 0;
    let q = 0;
    let x = 0;


    for (key in list) {
        if (list[key] === 'Done' && x < 1) {
            x++;
            console.log(`\n\"${key}\" : ${list[key]}`)
        } else if ((list[key] === 'Done' && x >= 1)) {
            x++;
            console.log(`\"${key}\" : ${list[key]}`)
        }
    };


    for (key in list) {
        if(list[key] === 'In Progress' && i < 1) {
            i++;
            console.log(`\n\"${key}\" : ${list[key]}`)
        } else if ((list[key] === 'In Progress' && i >= 1)) {
            i++;
            console.log(`\"${key}\" : ${list[key]}`)
        }
    };
    
        

    for (key in list) {
        if(list[key] === 'To Do' && q < 1) {
            q++;
            console.log(`\n\"${key}\" : ${list[key]}`)
        } else if ((list[key] === 'Done' && q >= 1)) {
            q++;
            console.log(`\"${key}\" : ${list[key]}`)
        }
    };
    


            if (q == 0) {
                console.log('\nNothing is \'To Do\'')
            }
            if (x == 0) {
                console.log('\nNothing is \'Done\'')
            }
            if (i == 0) {
                console.log('\nNothing is \'In Progress\'')
            }
        }
    
    

function addTask(quest, progress) {
        list[quest] = progress;

        if(list[quest] == undefined) {
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
