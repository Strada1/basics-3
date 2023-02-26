const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'},
  {name: 'homework', status: 'To Do', priority: 'high'}
];

function addTask(task) {
    list.push(task);
};
function deleteTask(task) {
    const pos = list.findIndex(element => element.name == task);
    list.splice(pos, 1);
};
function changeStatus(task, statusTask) {
    const pos = list.findIndex(element => element.name == task);
    list[pos].status = statusTask;
};
function showList() {
    flagToDo = false;
    flagDone = false;
    flagInProgress = false;
    console.log("To Do:");
    const listToDo = list.filter(statusTask => {if(statusTask.status == "To Do") {
        console.log(`\t"${statusTask.name}"`);
        flagToDo = true;
    }});
    if(!flagToDo) {
        console.log("\t-");
    }
    
    console.log("In Progress:");
    const listInProgress = list.filter(statusTask => {if(statusTask.status == "In progress") {
        console.log(`\t"${statusTask.name}"`);
        flagInProgress = true;
    }});
    if(!flagToDo) {
        console.log("\t-");
    }

    console.log("Done:");
    const listDone = list.filter(statusTask => {if(statusTask.status == "Done") {
        console.log(`\t"${statusTask.name}"\n`);
        flagToDo = true;
    }});
    if(!flagDone) {
        console.log("\t-");
    }
    
};

addTask({name: 'classwork', status: 'To Do', priority: 'high'});
console.log(list);
deleteTask('test');
console.log(list);
changeStatus("classwork", "In progress");
console.log(list);
showList();