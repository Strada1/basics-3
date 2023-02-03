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
        if (list[key] === 'Done') {
            x++;
            console.log(`${key} : ${list[key]}`)
        }
    };


    for (key in list) {
        if(list[key] === 'In Progress') {
            i++;
            console.log(`${key} : ${list[key]}`)
        }
    };
        

    for (key in list) {
        if(list[key] === 'To Do') {
            q++;
            console.log(`${key} : ${list[key]}`)
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
    



    // console.log(list)
    

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
