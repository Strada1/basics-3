import { STATUSES, PRIORITIES } from "./todo-parameters.js";
import {
  btnDeleteTaskHandler,
  checkboxStatusChangeHandler,
  todoListHigh,
  todoListLow,
} from "./initTodo.js";

const todoList = {
  list: [
    { id: 1, name: "dwwadwd1", status: STATUSES.TODO, priority: PRIORITIES.LOW },
    { id: 2, name: "dwwadwd2", status: STATUSES.DONE, priority: PRIORITIES.HIGH },
    { id: 3, name: "dwwadwd3", status: STATUSES.TODO, priority: PRIORITIES.HIGH },
    { id: 4, name: "dwwadwd4", status: STATUSES.DONE, priority: PRIORITIES.LOW },
  ],
  idNewTask: 5,

  addTask(taskName, priority) {
    if (!taskName) {
      console.log("Невозможно добавить задачу, введены некорректные данные");
      return;
    }

    this.list.push({
      id: this.idNewTask,
      name: taskName,
      status: STATUSES.TODO,
      priority: priority,
    });

    this.idNewTask++;

    this.render();
  },

  changeStatus(taskId, status) {
    if (!taskId) {
      console.log(
        "Невозможно изменить статус задачи, введены некорректные данные"
      );
      return;
    }

    const task = this.list.find((task) => task.id === +taskId);

    if (task) {
      task.status = status;
    } else {
      console.log("Статус задачи не изменен. Такой задачи нет");
    }

    this.render();
  },

  deleteTask(taskId) {
    const taskIndex = this.list.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.list.splice(taskIndex, 1);
    }

    this.render();
  },

  renderTask(task, tasksList) {
    tasksList.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="task-container ${
        task.status === STATUSES.DONE ? "task-done" : ""
      }" data-id="${task.id}">                   
        <div class="checkbox-container">
          <input type="checkbox" id="${task.id}" class="checkbox-status-task" ${
        task.status === STATUSES.DONE ? "checked" : ""
      }>
          <label for="${task.id}" class="checkbox-status-label"></label>
        </div>
        <div class="task-content">${task.name}</div>
        <button class="btn-delete-task" data-id="${task.id}">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)" stroke="#998899"/>
            <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)" stroke="#998899"/>
          </svg>
        </button>
      </div>
      `
    );

    tasksList
      .querySelector(`.task-container[data-id="${task.id}"]`)
      .addEventListener("change", checkboxStatusChangeHandler);
    tasksList
      .querySelector(`button[data-id="${task.id}"]`)
      .addEventListener("click", btnDeleteTaskHandler);
  },

  render() {
    for (const btn of document.querySelectorAll("btn-delete-task")) {
      btn.removeEventListener("click", btnDeleteTaskHandler);
    }

    for (const task of document.querySelectorAll("task-container")) {
      task.removeEventListener("change", checkboxStatusChangeHandler);
    }

    for (const container of document.querySelectorAll(".todo-list")) {
      container.replaceChildren();
    }

    for (const task of this.list) {
      switch (task.priority) {
        case PRIORITIES.HIGH:
          this.renderTask(task, todoListHigh);
          break;
        case PRIORITIES.LOW:
          this.renderTask(task, todoListLow);
          break;
        default:
          break;
      }
    }
  },
};

export { todoList };
