const ToDoList = [
    {name: "wake up", "status": "in progress",priority: "low"},  
    {name: "say hello", status: "Done", priority: "high"},  
    {name: "stay positive", status: "To do", priority: "normal"}
]
function isCorrectStatus(status)
{
    if (status === "done" || status === "in progress" || status === "To Do") {
        return true;
    } else {
        return false; 
    }
}


 function  isCorrectPriority(priority) {
    if (priority === "low" || priority === "normal" || "high") {
        return true; 
     } else {
            return false; 
        }
    }


    function addTaskList (name, status, priority){
        if (isCorrectPriority(priority)===true && 
        isCorrectStatus(status)=== true) { 
            const newTask
            = {
                name, 
                status, 
                priority, 
            }
        }
    }    
console.log(addTaskList("Hello", "Done", "low"))

    function findId(name) {
        return 
        ToDoLIst.findIndex(item => item.name === name) 
    }

    function isInList(name){
        if(findId(name) === -1){
            return false; 
        } else {
            return true;
        }
    }
    function deleteTask(name) {
        if(isInList === true) {
            ToDoList.splice(findId(name), 1)
        } else {
            console.log("uncorrect name")
        
        }
    }

    function changeStatus() {
        if (isInList(name)  === true) {
            if(isCorrectStatus("newStatus") === true){
ToDoList[findId()].status = newStatus;
        }
    }
}

function changePriority(name, newPriority) {
    if (isInlist(name) === true) {
        if (isCorrentPriority(newPriority) === true) {
            ToDoList[findId(name)].priority = newPriority;
        } else {
            console.log("uncorrect name")
        }
    } else {
        console.log("uncorrectpriority")

        }
    }
function showList(){
    const todos = []
    const inprog = []
    const dones = []
    for (item of ToDoList) {
        switch (item["status"]){
            case ("To do"):
                todos.push(item)
                break;
            case("In progress"):
                inprog.push(item)
                break;
            case ("Done"):
                dones.push(item)
                break;    
        }
    }
    if (todos.length > 0) {  
        console.log("To do", todos, "\n")  
            } else {  
        console.log("To do: \n empty \n")  
        }  
      
        if (inprog.length > 0) {  
        console.log("In progress", inprog, "\n")  
            } else {  
        console.log("To do: \n empty \n")  
        }  
      
        if (dones.length > 0) {  
        console.log("Done", dones, "\n")  
            } else {  
        console.log("Done: \n empty \n")
}
}

console.log(showList())