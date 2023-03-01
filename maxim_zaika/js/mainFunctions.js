"use strict"


import {todoList, fieldsAdding} from "./initialData.js";
import {clear, createTask, showTask, add, deleteFromTodoList, deleteFromUI} from "./additionalFunctions.js";

export function render(){
    clear();
    for(let task of todoList){
        showTask(task, createTask(task));
    }
    addingTasks();
    deletingTasks();
    changeStatus();
}
function addingTasks() {
    for(let fieldAdding of fieldsAdding){
        const formAdding = fieldAdding.parentElement.parentElement;
        formAdding.addEventListener("submit", () => {
            add(formAdding, fieldAdding);
        });
    }
}
function deletingTasks(){
    const allTasks = document.querySelectorAll(".business");
    for (let nodeTask of allTasks){
        const btnDelete = nodeTask.lastElementChild;
        btnDelete.addEventListener("click", () => {
            deleteFromTodoList(nodeTask);
            deleteFromUI(nodeTask);
            render();
        });
    }
}
function changeStatus(){
    const allTasks = document.querySelectorAll(".business");
    for (let nodeTask of allTasks){
        const checkboxIsShownProgress = nodeTask.firstElementChild;
        checkboxIsShownProgress.addEventListener("change", changeColorBusiness);
        function changeColorBusiness() {
            if (this.checked) {
                nodeTask.style.backgroundColor = "#C4C4C4";
            } else {
                nodeTask.style.backgroundColor = "#ffffff";
            }
        }
    }
    
}


