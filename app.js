const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", 
    "write a post": "To Do",
}

function changeStatus(val, status){
    list[val] = status

}

function deleteTask(val){
    delete list[val]
}

function addTask (val){
    list[val] = "In Progress"
}

function showList() {
    const todo = {}
    const progress = {}
    const done = {}

    for (const status in list) {
        
        if (list[status] === 'To Do') {
            todo[status] = 'To Do'
        }
        if (list[status] === 'In Progress') {
            progress[status] = 'In Progress'

        }
        if (list[status] === 'Done') {
            done[status] = 'Done'

        }
    
    }


    console.log("Todo:")
    if(Object.entries(todo).length === 0){
        console.log("-")
    }
    for (const status in todo) {
        console.log(status)
    }

    console.log("In Progress:")
    if(Object.entries(progress).length === 0){
        console.log("-")
    }
    for (const status in progress) {
        console.log(status)
    }

    console.log("Done:")
    if(Object.entries(done).length === 0){
        console.log("-")
    }
    for (const status in done) {
        console.log(status)
    }



}



changeStatus("write a post", "Done")
addTask('have a walk');
deleteTask('have a walk');
showList();