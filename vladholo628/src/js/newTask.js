// import { todo } from "./todo";

const itemTemplate = document.querySelector("#task-item-template");

export const createNewTaskItem = (itemText) => {
  const newTask = itemTemplate.content.cloneNode(true);
  newTask.querySelector(".todo__item-text").textContent = itemText;

  return newTask;
};
