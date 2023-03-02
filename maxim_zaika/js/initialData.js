"use strict"

import { STATUSES, PRIORITY} from "./constants.js";

const todoList = [
    {name: "Сверстать этот TODO List", status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: 'Добавить функциональность', status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: 'Улучшить код', status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: "Посмотреть ютубчик", status: STATUSES.DONE, priority: PRIORITY.LOW}
];
const exampleTask = document.querySelector(".example");
const sectionHigh = document.querySelector("#high");
const sectionLow = document.querySelector("#low");
const fieldsAdding = document.querySelectorAll("#add__field");

export {todoList, exampleTask, sectionHigh, sectionLow, fieldsAdding};