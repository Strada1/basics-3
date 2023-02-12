const list = [
    { name: "Create a post", status: "In progress", priority: "Low" },
    { name: "Read a book", status: "In progress", priority: "Low" },
    { name: "Test", status: "Done", priority: "High" },
];

const addTask = (name, status, priority) => list.unshift({ name: name, status: status, priority: priority });

const searchTask = (name) => {
    const taskName = name;
    const searchedTask = list.find(name => name.name === taskName);
    return searchedTask;
};

const getIndexOfTask = (name) => {
    const taskObject = searchTask(name)
    const indexOfTask = list.indexOf(taskObject);
    return indexOfTask;
};

const deleteTask = (name) => {
    const taskToDelete = getIndexOfTask(name);
    list.splice(taskToDelete, 1);
};

const changeStatus = (name, status) => {
    const taskToChangeStatus = searchTask(name);
    taskToChangeStatus["status"] = status;
};

const changePriority = (name, priority) => {
    const taskToChangePriority = searchTask(name);
    taskToChangePriority["priority"] = priority;
};

const showList = () => {
    const inProgress = list.filter(task => task.status === "In progress");
    const toDo = list.filter(task => task.status === "To do");
    const done = list.filter(task => task.status === "Done");

    console.log("\n In progress: ");
    console.log(inProgress);

    console.log("\n To do: ");
    console.log(toDo);

    console.log("\n Done: ");
    console.log(done);
}

addTask("Have a walk", "To do", "Middle");
deleteTask("Test");
changeStatus("Create a post", "Done");
changePriority("Have a walk", "Low");
showList();