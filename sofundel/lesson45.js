const STATUS = {
    TO_DO: "To Do",
    DONE: "Done"
}

const PRIORITY = {
    LOW: "Low",
    HIGH: "High"
}

const scheduler = {
    fullList: [
        { name: "drink water", status: STATUS.DONE, priority: PRIORITY.HIGH },
        { name: "do Strada", status: STATUS.TO_DO, priority: PRIORITY.HIGH },
        { name: "drink coffee", status: STATUS.DONE, priority: PRIORITY.LOW },
        { name: "have dinner", status: STATUS.TO_DO, priority: PRIORITY.LOW },
        { name: "work", status: STATUS.DONE, priority: PRIORITY.HIGH },
        { name: "sleep", status: STATUS.TO_DO, priority: PRIORITY.HIGH }],

    findIndex(name) {
        return index = this.fullList.findIndex(task => task.name === name);
    },

    addTask(name, status = STATUS.TO_DO, priority = PRIORITY.LOW) {
        this.fullList.push({ name, status, priority });

        this.render();

    },

    changeStatus(name, status) {
        this.findIndex(name);
        if (index !== -1) {
            this.fullList[index].status = status;
        };

        this.render();
    },

    deleteTask(name) {
        this.findIndex(name);

        if (index !== -1) {
            this.fullList.splice(index, 1);
        };

        this.render();

    },

    render() {
        let deletedElements = document.querySelectorAll(".todo-list__task-checkbox");

        deletedElements.forEach(function (elem) {
        elem.parentNode.removeChild(elem);
        });

        for (const task of this.fullList) {
            if (task.priority === PRIORITY.HIGH) {
                const taskCheckbox = document.createElement("div");
                document.querySelector("#high-priority").appendChild(taskCheckbox);
                taskCheckbox.className = "todo-list__task-checkbox";

                const taskName = task.name;
                const taskStatus = task.status;

                createHTMLStructure(taskCheckbox, taskName, taskStatus);
            
            } else if (task.priority === PRIORITY.LOW) {
                
                const taskCheckbox = document.createElement("div");
                document.querySelector("#low-priority").appendChild(taskCheckbox);
                taskCheckbox.className = "todo-list__task-checkbox";

                const taskName = task.name;
                const taskStatus = task.status;

                createHTMLStructure(taskCheckbox, taskName, taskStatus);
            }
        }
    }

}

console.log(scheduler.fullList);
scheduler.render();

function checkInputData(taskBG, task) {
    if (task.trim() === "") {
        taskBG.style.backgroundColor = "#faebf1";
        setTimeout(() => { taskBG.style.backgroundColor = "white"; }, 400);

        return true;
    }
}

function createHTMLStructure(taskCheckbox, taskName, taskStatus) {
    const checkTask = document.createElement("input");
    taskCheckbox.appendChild(checkTask);
    checkTask.type = "checkbox";
    checkTask.className = "todo-list__check-task";

    if (taskStatus === STATUS.DONE) {
        checkTask.checked = true;
        taskCheckbox.style.backgroundColor = "#eaeaea";
    };

    checkTask.addEventListener("change", () => { ifCheckTask(checkTask, taskCheckbox, checkTaskText) });

    const checkTaskText = document.createElement("label");
    taskCheckbox.appendChild(checkTaskText);
    checkTaskText.className = "todo-list__check-task-text";

    buttonDeleteTask = document.createElement("button");
    taskCheckbox.appendChild(buttonDeleteTask);
    buttonDeleteTask.className = "todo-list__button-delete-task";
    buttonDeleteTask.addEventListener("click", () => { deleteTask(taskCheckbox, checkTaskText) });

    checkTaskText.textContent = taskName;
}


function createHighTask(task) {
    task.preventDefault();

    const highTaskForm = document.querySelector("#high-task-form");
    const highTaskFormData = new FormData(highTaskForm);
    const highTask = highTaskFormData.get("add-high-task");

    const highTaskBG = document.querySelector("#add-high-task");
    if (checkInputData(highTaskBG, highTask)) { return };

    scheduler.addTask(highTask, STATUS.TO_DO, PRIORITY.HIGH);

    highTaskForm.reset();
}

const addHighTaskButton = document.querySelector("#button-add-high-task");
addHighTaskButton.addEventListener("click", createHighTask);


function createLowTask(task) {
    task.preventDefault();

    const lowTaskForm = document.querySelector("#low-task-form");
    const lowTaskFormData = new FormData(lowTaskForm);
    const lowTask = lowTaskFormData.get("add-low-task");

    const lowTaskBG = document.querySelector("#add-low-task");
    if (checkInputData(lowTaskBG, lowTask)) { return };

    scheduler.addTask(lowTask, STATUS.TO_DO, PRIORITY.LOW);

    lowTaskForm.reset();
}

const addLowTaskButton = document.querySelector("#button-add-low-task");
addLowTaskButton.addEventListener("click", createLowTask);

function deleteTask(taskCheckbox, checkTaskText) {
    taskCheckbox.remove();
    scheduler.deleteTask(checkTaskText.textContent);
}

function ifCheckTask(checkTask, taskCheckbox, checkTaskText) {
    if (checkTask.checked) {
        taskCheckbox.style.backgroundColor = "#eaeaea";
        scheduler.changeStatus(checkTaskText.textContent, STATUS.DONE);
    } else {
        taskCheckbox.style.backgroundColor = "white";
        scheduler.changeStatus(checkTaskText.textContent, STATUS.TO_DO);
    }
}