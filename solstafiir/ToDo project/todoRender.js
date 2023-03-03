import { PRIORITIES, STATUSES } from "./nameSpaces.js";

const list = [
  // { id: 1, name: "wash the car", status: "To Do", priority: "High" },
  // { id: 2, name: "create a post", status: "To Do", priority: "High" },
  // { id: 3, name: "suck", status: "To Do", priority: "Low" },
];

function render() {
  const highTaskCollector = document.querySelector(".high-task-collector");
  const lowTaskCollector = document.querySelector(".low-task-collector");

  deleteTasksFromArray();

  list.forEach((el) => {
    const taskHTML = `<div class="task" id=${el.id} >
    <input type="checkbox"  class="check" />
    <div class="todo-content">
    ${el.name}
    </div>
    <button class="delete-task-button">+</button>
    </div>`;
    switch (el.priority) {
      case PRIORITIES.HIGH:
        highTaskCollector.insertAdjacentHTML("beforeend", taskHTML);
        break;
      case PRIORITIES.LOW:
        lowTaskCollector.insertAdjacentHTML("beforeend", taskHTML);
        break;
    }
    if (el.status === STATUSES.DONE) {
      const task = document.querySelector(`#${CSS.escape(el.id)}`);
      task.style.background = "lightgreen";
      const input = task.querySelector(".check");
      input.checked = true;
    }
  });
  console.log(list);
}

//удаление существущих тасок для рендера
function deleteTasksFromArray() {
  const taskFromArray = document.querySelectorAll(".task");
  if (taskFromArray) {
    taskFromArray.forEach((taskFromArray) => taskFromArray.remove());
  }
}

export { render, list };
