let highTask;

function getHighTask(task) {
    task.preventDefault();

    const highTaskFormData = new FormData(highTaskForm);
    highTask = highTaskFormData.get('added-high-task');

    createHighTask();
}

function createHighTask() {
    const checkTask = document.createElement("div");
    document.querySelector("#priority-high").appendChild(checkTask);
    checkTask.className = "todo-list__check-task";

    const checkedTask = document.createElement("input");
    checkTask.appendChild(checkedTask);
    checkedTask.type = "checkbox";
    checkedTask.className = "todo-list__checked-task";

    const label = document.createElement("label");
    checkTask.appendChild(label);
    label.className = "label";

    const buttonDelete = document.createElement("button");
    checkTask.appendChild(buttonDelete);
    buttonDelete.className = "todo-list__button-delete-task";
    
    label.textContent = highTask;
}

const highTaskForm = document.querySelector("#high-task-form");
highTaskForm.addEventListener("submit", getHighTask);


let lowTask;

function getLowTask(task) {
    task.preventDefault();

    const lowTaskFormData = new FormData(lowTaskForm);
    lowTask = lowTaskFormData.get('added-low-task');

    createLowTask();
}

function createLowTask() {
    const checkTask = document.createElement("div");
    document.querySelector("#priority-low").appendChild(checkTask);
    checkTask.className = "todo-list__check-task";

    const checkedTask = document.createElement("input");
    checkTask.appendChild(checkedTask);
    checkedTask.type = "checkbox";
    checkedTask.className = "todo-list__checked-task";

    const label = document.createElement("label");
    checkTask.appendChild(label);
    label.className = "label";

    const buttonDelete = document.createElement("button");
    checkTask.appendChild(buttonDelete);
    buttonDelete.className = "todo-list__button-delete-task";
    
    label.textContent = lowTask;
}

const lowTaskForm = document.querySelector("#low-task-form");
lowTaskForm.addEventListener("submit", getLowTask);