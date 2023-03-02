"use strict"

const STATUSES = {
    TODO:'todo',
    DONE: 'done',
};
const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
};
const todoList = [
    {name: "Сверстать этот TODO List", status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: 'Добавить функциональность', status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: 'Улучшить код', status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: "Посмотреть ютубчик", status: STATUSES.DONE, priority: PRIORITY.LOW}
];
const exampleTask = document.querySelector(".example");
const sectionHigh = document.querySelector("#high");
const sectionLow = document.querySelector("#low");


export {STATUSES, PRIORITY, todoList, exampleTask, sectionHigh, sectionLow};