const toDo = [
    {name:"create a new practice task", status:"To Do", priority: "high"}, 
	{name:"make a bed", status: "To Do", priority: "low"}, 
	{name:"write a post", status: "To Do", priority: "average"},
    {name:"gym workout", status: "Done", priority: "average"},
    {name:"make call", status: "Done", priority: "low"},
];
function addNewTask(name,status,priority){
    toDo.push({name, status, priority});   
}
function delTask(x){
    let taskIndex = toDo.findIndex(nt => nt.name === x);
    let delT = toDo.splice(taskIndex,1);
}
function changeStatus(name, newStaus){
    let taskIndex = toDo.findIndex(nt => nt.name === name);
    toDo[taskIndex].status = newStaus;
}

function showtodo(){
    const hereTodoTask = toDo.filter(a =>a.status == "To Do");
    const hereInprogressTask = toDo.filter(a =>a.status == "In progress");
    const hereDoneTask = toDo.filter(a =>a.status == "Done");
    if(hereTodoTask.length>0){
        for(task of hereTodoTask){
            console.log(task.name + ' : '+ task.status + ' : ' + task.priority);
        } 
    }else {
        console.log('Nothing to do');
    }
    if(hereInprogressTask.length>0){
        for(task of hereInprogressTask){
            console.log(task.name + ' : '+ task.status + ' : ' + task.priority);
        } 
    }else {
        console.log('Nothing in progress');
    }
    if(hereDoneTask.length>0){
        for(task of hereDoneTask){
            console.log(task.name + ' : '+ task.status + ' : ' + task.priority);
        } 
    }else {
        console.log('Nothing is done');
    }
}

function showtodo2(){
    let todofind = toDo.find(s=>s.status ==="To Do");
    let inprogressfind = toDo.find(s=>s.status ==="In progress");
    let donefind = toDo.find(s=>s.status ==="Done");
    
        toDo.sort(function (a,b){
            if(a.status !== "To Do" && b.status == "To Do"){
                return -1;
            }
            return 0;
            })
    
        toDo.sort(function (a,b){
            if(a.status !== "In progress" && b.status == "In progress"){
                return -1;
            }
            return 0;
            })
    
        toDo.sort(function (a,b){
            if(a.status !== "Done" && b.status == "Done"){
                return -1;
            }
            return 0;
            })
    
    for(task of toDo){
        console.log(task.name + ' : '+ task.status + ' : ' + task.priority);
    }
    if(!todofind){
        console.log('Nothing to do');
    }
    if(!inprogressfind){
        console.log('Nothing in progress');
    }
    if(!donefind){
        console.log('Nothing is done');
    }
}
delTask('create a new practice task');
changeStatus('gym workout', 'To Do');
addNewTask('go to sleep','In progress','high');
changeStatus('make call','To Do');
showtodo2();