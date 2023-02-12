const statusList = ['Todo', 'In progress', 'Done']

const priorityList = ['high', 'medium', 'low']

const toDoList = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'make a ToDo on Massive', status: 'Done', priority: 'high'}, {name: 'make a dinner', status: 'Todo', priority: 'medium'}
];

function addTask(task, status, priority) {
    statusCheck = statusList.includes(status)
    priorityCheck = priorityList.includes(priority)
    if (statusCheck == true && priorityCheck == true) {
        toDoList.push({name: task, status: status, priority: priority});
        console.log(`Task ${task} has been added!`);
    } else {
        console.log('Wrong status or priority')
    }

}

function removeTask(id) {
    toDoList.splice(id, 1);
    console.log('Task removed!');
}

function changeStatus(id, newStatus) {
    statusCheck = statusList.includes(newStatus);
    if (statusCheck == true) {
        toDoList[id].status = newStatus;
        console.log('Status has been updated!');
    } else {
        console.log('Wrong status');
    }
}

function changePriority(id, newPriority) {
    priorityCheck = priorityList.includes(newPriority);
    if (priorityCheck == true) {
        toDoList[id].priority = newPriority;
        console.log('Priority has been updated!');
    } else {
        console.log('Wrong Priority');
    }
}

function showList() {
    toDoList.forEach(name => {
        let taskId = toDoList.indexOf(name)
        console.log(`Task id: ${taskId}`)
        console.log(name);
    });
}

showList()

addTask('buy milk', 'Done', 'high')
addTask('buy milk', 'Dne', 'high')
addTask('buy milk', 'Done', 'hgh')
showList()

removeTask(0);
showList()

changeStatus(2, 'Todo')
changeStatus(1, 'On pause')
showList()

changePriority(0, 'medium')
changePriority(1, 'extra')
showList()


