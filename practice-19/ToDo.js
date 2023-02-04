const list = {
    "wake up": "In progress",
    "make a bed": "To Do",
    "have a breakfast": "To Do",
};

function changeStatus(action, status) {
    if(list.action !== status) {
        list[action] = status;
        console.log("status was changed");
    };  
};

function addTask(action, status) {
    if(action == list[action]) {
        console.log("task already exists");
    } else {
            list[action] = status;
            console.log("Task was added");
        };
    };
    
function deleteTask(action) {
    delete list[action];
    console.log("Task was removed");
};

function showList() {
    for(let key in list) {
        switch(list[key]) {
            case "To Do":
                console.log(key + " " + ":" + " " + list[key]);
                break;   
            };
        };
        for(let key in list) {
            switch(list[key]) {
                case "In progress":
                    console.log(key + " " + ":" + " " + list[key]);
                    break;
            };
        };
        for(let key in list) {
            switch(list[key]) {
                case "Done":
                    console.log(key + " " + ":" + " " + list[key]);
                    break;
                 case "":
                 case undefined:
                    console.log(key + " " + ":" + " " + "no action for this task");
                // default: console.log('no such task');
            };
        };
        for(let key in list) {
            switch(list[key]) {
                 case "":
                 case undefined:
                    console.log(key + " " + ":" + " " + "no action for this task");
                // default: console.log('no such task');
            };
        };
}

addTask("do homework", "In progress");
// changeStatus("wake up", "Done");
// deleteTask("make a bed");
// addTask("go walk");
// changeStatus("have a breaksfast", "Done");
// addTask("have a dinner");
addTask("go to sleep", "To Do");
changeStatus("wake up", "Done");
showList();



