"use strict"

import {STATUSES, todoList} from "./initialData.js";
import {clear, createTask, showTask, add, deleteFromTodoList} from "./additionalFunctions.js";
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
    const fieldsAdding = document.querySelectorAll("#add__field");
    for(let fieldAdding of fieldsAdding){
        const formAdding = fieldAdding.parentElement.parentElement;
        formAdding.addEventListener("click", () => {
            add(formAdding, fieldAdding);
            render();
        });
    }
}
function deletingTasks(){
    const allTasks = document.querySelectorAll(".business");
    for (let nodeTask of allTasks){
        const btnDelete = nodeTask.lastElementChild;
        btnDelete.addEventListener("click", () => {
            deleteFromTodoList(nodeTask);
            // deleteFromUI(nodeTask);
            render();
        });
    }
}

function changeStatus(){
    const allTasks = document.querySelectorAll(".business");
    for (let nodeTask of allTasks){
        const checkboxIsShownProgress = nodeTask.firstElementChild;
        checkboxIsShownProgress.addEventListener("change", changeColorTask);
        function changeColorTask() {
            const textFromTask = nodeTask.querySelector("#business__text").textContent;
            if (this.checked) {
                const index = todoList.findIndex((item) => item.name === textFromTask);
                todoList[index].status = STATUSES.DONE;
            } else {
                const index = todoList.findIndex((item) => item.name === textFromTask);
                todoList[index].status = STATUSES.TODO;
            }
            render();
        }
    }
    
}


