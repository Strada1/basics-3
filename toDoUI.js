const highPriorityForm = document.querySelector(".high-priority-form");
const lowPriorityForm = document.querySelector(".low-priority-form");
const highPriorityTaskField = document.querySelector(".high-priority-task-field");
const lowPriorityTaskField = document.querySelector(".low-priority-task-field");
const highPriorityInput = document.querySelector(".add-high-task-field");
const lowPriorityInput = document.querySelector(".add-low-task-field");
/*const deleteTaskButtons = document.querySelectorAll(".delete-task-button");*/
const TODO_STATUS = {
    TODO : "To Do",
    DONE : "Done",
}
const PRIORITY = {
    LOW : "low",
    HIGH : "high",
}
const list = [];

function addTask(taskName, taskStatus, taskPriority) {
    let newTask = {id: Math.random(), name: taskName, status: taskStatus, priority: taskPriority,};
    list.push(newTask);
}

function highPriorityCheck(e) {
    return (e.target.classList.contains("high-priority-form")
        || e.target.classList.contains("add-high-task-field"));
}

function lowPriorityCheck(e) {
    return (e.target.classList.contains("low-priority-form")
        || e.target.classList.contains("add-low-task-field"));
}

function addTaskInList(e) {
    e.preventDefault();

    let highPriorityTaskName = highPriorityInput.value;
    let lowPriorityTaskName = lowPriorityInput.value;

if (highPriorityCheck(e)) {
    addTask(highPriorityTaskName, TODO_STATUS.TODO, PRIORITY.HIGH )
} else {
    addTask(lowPriorityTaskName, TODO_STATUS.TODO, PRIORITY.LOW )
}

render();


document.querySelector(".add-high-task-field").value = "";
document.querySelector(".add-low-task-field").value = "";
console.log(list);
}

highPriorityForm.addEventListener("submit", addTaskInList);
lowPriorityForm.addEventListener("submit", addTaskInList);



function render () {

    deleteOldTasks();
    addUpdatedTasks();
}

function deleteOldTasks() {

    const oldTasks = document.querySelectorAll(".task");
    if (oldTasks) {
        oldTasks.forEach(item => item.remove());
    }
}

function addUpdatedTasks() {
    list.forEach(task => {
        /*if (task.priority === PRIORITY.HIGH) {
            addHighPriorityTask(task)
        }
        if(task.priority === PRIORITY.LOW) {
            addLowPriorityTask(task)
        }*/
        task.priority === PRIORITY.HIGH
            ? addHighPriorityTask(task)
            : addLowPriorityTask(task)
    })
}

function addHighPriorityTask(task) {

    let div = document.createElement("div");
    div.className = "task";
    div.id = task.id;
    highPriorityTaskField.appendChild(div);

    let innerCheckbox = document.createElement("input");
    innerCheckbox.type = "checkbox";
    innerCheckbox.className = "check";
    div.appendChild(innerCheckbox);

    let innerDiv = document.createElement("div");
    innerDiv.className = "todo-content";
    innerDiv.textContent = task.name;
    div.appendChild(innerDiv);

    let innerButton = document.createElement("button");
    innerButton.className = "delete-task-button";
    innerButton.textContent = "+";
    div.appendChild(innerButton);

    if (task.status === TODO_STATUS.DONE) {
        div.classList.add("done");
        innerCheckbox.setAttribute("checked", "checked");
    }

}


    function addLowPriorityTask(task) {

        let div = document.createElement("div");
        div.className = "task";
        div.id = task.id;
        lowPriorityTaskField.appendChild(div);

        let innerCheckbox = document.createElement("input");
        innerCheckbox.type = "checkbox";
        innerCheckbox.className = "check";
        div.appendChild(innerCheckbox);

        let innerDiv = document.createElement("div");
        innerDiv.className = "todo-content";
        innerDiv.textContent = task.name;
        div.appendChild(innerDiv);

        let innerButton = document.createElement("button");
        innerButton.className = "delete-task-button";
        innerButton.textContent = "+";
        div.appendChild(innerButton);

        if (task.status === TODO_STATUS.DONE) {
            div.classList.add("done");
            innerCheckbox.setAttribute("checked", "checked");
        }

    }


function deleteTask (e) {
if(!e.target.classList.contains("delete-task-button")) return;
    else {
    console.log(list);
        if (e.target.closest(".task") !== null) {
            const targetTaskId = e.target.closest(".task").id;
            console.log(targetTaskId);
            const taskIndex = list.findIndex(item => item.id === Number(targetTaskId));
            console.log(taskIndex)
            list.splice (taskIndex,1);
        }
    }
    render()
    console.log(list);
}
document.addEventListener("click", deleteTask)





function changeStatus(e){
    if (e.target.classList.contains("check")){
        const targetTaskId = e.target.closest(".task").id;
        const findedTask= list.find(item => item.id === Number(targetTaskId));

        findedTask.status === TODO_STATUS.TODO
            ? findedTask.status = TODO_STATUS.DONE
            : findedTask.status = TODO_STATUS.TODO

    }
    console.log(list)
    render();
}
document.addEventListener("click", changeStatus)






