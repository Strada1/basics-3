const toDo = {
    list: {
        "Wake up": "Awaiting",
        "Brush the theeth": "Awaiting",
        "Walk the dog": "Awaiting",
        "Clean the room": "Awaiting",
        "Visit the museum": "Awaiting",
        "Have a lunch": "Awaiting",
        "Read the book": "Awaiting",
    },
    changeStatus(name, statusList) {
        this.list[name] = statusList;
    },
    add(name, statusList) {
        this.list[name] = statusList;
    },
    deleteTask(name) {
        delete this.list[name];
    }
};

function showList() {
    for (const name in toDo.list) {
        let report = name + " : " + toDo.list[name];
        if (toDo.list[name] === "Done") {
            console.log(report);
        };

        if (toDo.list[name] === "In progress") {
            console.log(report);
        }; 

        if (toDo.list[name] === "Shift to tomorrow") {
            console.log(report);
        }; 

        if (toDo.list[name] === "Awaiting") {
            console.log(report);
        }; 
        
        if (toDo.list[name] === "Planned") {
            console.log(report);
        }; 
    };
};

// Satus: Awaiting, In progress, Done, Shift to tomorrow, Planned

toDo.changeStatus("Wake up", "Done");

toDo.changeStatus("Brush the theeth", "Done",);
toDo.changeStatus("Walk the dog", "Done");

toDo.add("Meet with friends", "Planned",);
toDo.deleteTask("Clean the room");
toDo.changeStatus("Visit the museum", "Done");

toDo.changeStatus("Have a lunch", "Done",);
toDo.add("Clean the room", "Shift to tomorrow",);

showList();
