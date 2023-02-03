const Status = {
    in_progress: "In Progress",
    done: "Done",
    to_do: "To Do",
};

let TODOlist = {
    "Wake up at 6 am": Status.done,
    "Drink water": Status.done,
    "Create TODO List": Status.in_progress,
    "Remove snow": Status.to_do
};

function addTask(task) {
    TODOlist[task] = "To Do";
}

function changeStatus(task, status) {
    if (task in TODOlist) {
        TODOlist[task] = status;
        } else {
            console.log("Undefined task");
        }
}

function deleteTask(task) {
    if (task in TODOlist) {
        delete TODOlist[task];
    } else {
        console.log("Undefined task");
    }
}

function showList() {
    let inProgress = "";
    let Done = "";
    let Todo = "";

    for (let key in TODOlist) {
        if (TODOlist[key] === Status.in_progress) {
            inProgress += key + "\n";
            if(inProgress === "") {
                inProgress += "-" + "\n";
            }
        } else if (TODOlist[key] === Status.done) {
            Done += key + "\n";
            if(Done === "") {
                Done += "-" + "\n";
            }
        } else if (TODOlist[key] === Status.to_do) {
            Todo += key + "\n";
            if(Todo === "") {
                Todo += "-" + "\n";
            } 
        }
    }
    console.log(`To do: \n ${Todo} \n In Progress: \n ${inProgress} \n Done: \n ${Done}`);
}

changeStatus("Create TODO List", Status.done);
addTask("To wash a car", Status.to_do);
addTask("any");
changeStatus("Remove snow", Status.in_progress);
deleteTask("any");

showList(TODOlist);