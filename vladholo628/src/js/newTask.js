// import { todo } from "./todo";

const itemTemplate = document.querySelector("#task-item-template");

export const createNewTaskItem = (itemText) => {
  const newTask = itemTemplate.content.cloneNode(true);
  // const newTaskCheckbox = newTask.querySelector(".todo__item-input");
  // const newTaskCloseBtn = newTask.querySelector(".todo__item-btn");

  newTask.querySelector(".todo__item-text").textContent = itemText;

  // newTaskCheckbox.addEventListener("click", () => {
  //   const parent = newTaskCheckbox.parentNode;
  //   parent.classList.toggle("todo__item", "todo__item--done");
  // });

  return newTask;
};
