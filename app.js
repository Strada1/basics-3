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
    for (const status in list) {
        
        if (list[status] === 'To Do') {
            console.log(`${status} - ${list[status]}`);
        } 
        else if (list[status] === 'In Progress') {
        console.log(`${status} - ${list[status]}`);
        } 
        else if (list[status] === 'Done') {
            console.log(`${status} - ${list[status]}`);
        }        
    
    }
    if (!Object.values(list).includes('Done')) {
        console.log('Nothing is done!');
    } 
    
}



changeStatus("write a post", "Done")
addTask('have a walk');
deleteTask('have a walk');
showList();
