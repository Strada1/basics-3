import { createNewTaskItem } from "./newTask";
import { AVALIABLE_OPTIONS, todo } from "./todo";

const highPriorityBlock = document.querySelector(".category--high");
const lowPriorityBlock = document.querySelector(".category--low");
const highPriorityForm = highPriorityBlock.querySelector(".todo__form");
const highPriorityInput = highPriorityBlock.querySelector(".todo__form-input");
const lowPriorityInput = lowPriorityBlock.querySelector(".todo__form-input");
const lowPriorityForm = lowPriorityBlock.querySelector(".todo__form");
const highPriorityList = highPriorityBlock.querySelector(".todo__list");
const lowPriorityList = lowPriorityBlock.querySelector(".todo__list");

const setDeletion = () => {
  const taskCloseBtn = document.querySelectorAll(".todo__item-btn");

  taskCloseBtn.forEach((btn) => {
    const taskItem = btn.parentElement;
    const taskName = taskItem.querySelector(".todo__item-text").textContent;

    btn.addEventListener("click", (e) => {
      todo.removeTask(taskName);
      render();
    });
  });
};

const setStatusChange = () => {
  const allTasks = document.querySelectorAll(".todo__item");

  allTasks.forEach((task) => {
    const taskCheckbox = task.querySelector(".todo__item-checkbox");
    const taskName = task.querySelector(".todo__item-text").textContent;
    const taskIsDone = taskCheckbox.checked;

    taskCheckbox.addEventListener("click", (e) => {
      if (taskIsDone) {
        todo.changeStatus(taskName, AVALIABLE_OPTIONS.statuses.toDo);
      } else {
        todo.changeStatus(taskName, AVALIABLE_OPTIONS.statuses.done);
      }

      render();
    });
  });
};

const render = function () {
  const tasksList = todo.list;
  lowPriorityList.innerHTML = "";
  highPriorityList.innerHTML = "";

  tasksList.forEach((task) => {
    const newTask = createNewTaskItem(task.name);
    const taskIsDone = task.status === AVALIABLE_OPTIONS.statuses.done;
    const taskCheckbox = newTask.querySelector(".todo__item-checkbox");

    if (task.priority === AVALIABLE_OPTIONS.priorities.high) {
      highPriorityList.appendChild(newTask);
    } else {
      lowPriorityList.appendChild(newTask);
    }
    if (taskIsDone) {
      taskCheckbox.setAttribute("checked", "");
      taskCheckbox.closest(".todo__item").classList.add("todo__item--done");
    }
  });
  setDeletion();
  setStatusChange();
};

render();

const validateEnteredTask = (enteredTask) => {
  return enteredTask.length > 0;
};

highPriorityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEnteredTask(highPriorityInput.value)) return;
  todo.addTask(highPriorityInput.value, "", AVALIABLE_OPTIONS.priorities.high);
  render();
  e.target.reset();
});

lowPriorityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEnteredTask(lowPriorityInput.value)) return;
  todo.addTask(lowPriorityInput.value, "", AVALIABLE_OPTIONS.priorities.low);
  render();
  e.target.reset();
});
