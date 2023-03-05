import { PRIORITIES, STATUSES } from "./todo-parameters.js";
import { todoList } from "./todo.js";

const formHighPriority = document.getElementById("form-priority-high");
const formLowPriority = document.getElementById("form-priority-low");
const todoListHigh = document.querySelector(".todo-list.high");
const todoListLow = document.querySelector(".todo-list.low");

function handleFormSubmit(event) {
    event.preventDefault();
    const todoInput = this.querySelector(".todo-input");
    const task = todoInput.value.trim();
    todoInput.value = "";
    todoInput.focus();
    
    if (task === "") return;
    
    todoList.addTask(task, event.currentTarget.getAttribute("priority"));
}

function checkboxStatusChangeHandler(event) {
    if (event.target.checked) {
        todoList.changeStatus(event.target.id, STATUSES.DONE);
    } else {
        todoList.changeStatus(event.target.id, STATUSES.TODO);
    }
}

function btnDeleteTaskHandler(event) {
    todoList.deleteTask(+event.currentTarget.getAttribute("data-id"));
}

formHighPriority.setAttribute("priority", PRIORITIES.HIGH);
formHighPriority.addEventListener("submit", handleFormSubmit);
formLowPriority.setAttribute("priority", PRIORITIES.LOW);
formLowPriority.addEventListener("submit", handleFormSubmit);

export {todoListHigh, todoListLow, checkboxStatusChangeHandler, handleFormSubmit, btnDeleteTaskHandler}


