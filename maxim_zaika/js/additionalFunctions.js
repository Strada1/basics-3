"use strict"

import { STATUSES, PRIORITY} from "./constants.js";
import {todoList, exampleTask, sectionHigh, sectionLow} from "./initialData.js";
import { render } from "./mainFunctions.js"

function clear(){
    const allTasks = document.querySelectorAll(".business");
    for(let task of allTasks){
        task.remove();
    }
}
function createTask(task) {
    const textForTask = task.name;
    const newTask = exampleTask.cloneNode(true);
    newTask.querySelector("#business__text").textContent = textForTask;
    newTask.className = "business";
    newTask.dataset.status = `${task.status}`;
    newTask.dataset.priority = `${task.priority}`;
    if(task.status === STATUSES.TODO){
        newTask.style.backgroundColor = "#FFFFFF";
    }
    if(task.status === STATUSES.DONE){
        newTask.style.backgroundColor = "#C4C4C4";
        const checkboxIsShownProgress = newTask.firstElementChild;
        checkboxIsShownProgress.checked = true;
    }
    return newTask;
}
function showTask(task, newTask) {
    if(task.priority === PRIORITY.HIGH){
        sectionHigh.append(newTask);
    }
    if(task.priority === PRIORITY.LOW){
        sectionLow.append(newTask);
    }
}
function getText(fieldAdding) {
    return fieldAdding.value[0].toUpperCase() + fieldAdding.value.slice(1);
}
function getPrority(node){
    return node.dataset.priority;
}
function addInTodoList(textForTask, priority){
    const newTask = {name: textForTask, status: STATUSES.TODO, priority: priority};
    todoList.push(newTask);
}
function clearFieldAdding(fieldAdding){
    fieldAdding.value = "";
}
function add(formAdding, fieldAdding){
    const textForTask = getText(fieldAdding);
    const priority = getPrority(formAdding);
    addInTodoList(textForTask, priority);
    clearFieldAdding(fieldAdding);
    render();
};
function deleteFromTodoList(nodeTask){
    const textFromTask = nodeTask.querySelector("#business__text").textContent;
    const index = todoList.findIndex((item) => item.name === textFromTask);
    todoList.splice(index, 1);
}
function deleteFromUI(nodeTask){
    nodeTask.remove();
}

export {clear, createTask, showTask, getText, getPrority, addInTodoList, clearFieldAdding, add, deleteFromTodoList, deleteFromUI};