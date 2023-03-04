import { PRIORITIES, STATUSES } from "./nameSpaces.js";
import { render, list } from "./todoRender.js";

const highForm = document.querySelector(".high-task-field");
const lowForm = document.querySelector(".low-task-field");

render();

function addTask(contentForm, priority) {
  const taskText = contentForm;
  try {
    if (taskText === "") {
      throw new SyntaxError(
        "SyntaxError:" + " Поле для ввода задачи не может быть пустым"
      );
    } else {
      list.splice(0, 0, {
        id: Date.now(),
        name: taskText,
        status: STATUSES.TODO,
        priority: priority,
      });
    }
  } catch (error) {
    alert(error.message);
  }
}

// смена статуса
function changeTaskStatus(event) {
  if (event.target.classList.contains("check")) {
    const id = event.target.parentElement.id;
    list.findIndex((item) => {
      if (item.id == id && item.status !== STATUSES.DONE) {
        item.status = STATUSES.DONE;
      } else if (item.id == id && item.status !== STATUSES.TODO) {
        item.status = STATUSES.TODO;
      }
    });
    render();
  }
}
document.addEventListener("click", changeTaskStatus);

// //удаление
function deleteTask(event) {
  if (event.target.classList.contains("delete-task-button")) {
    const id = event.target.parentElement.id;
    const index = list.findIndex((task) => task.id == id);
    list.splice(index, 1);
    event.target.parentElement.remove();
    render();
  }
}
document.addEventListener("click", deleteTask);

//удаление существущих тасок для рендера

// //функции для добавления в поля ввысокого и низкого приоритетов
function addHighTask(event) {
  const highFormContent = document.querySelector(".add-high-task-field");
  event.preventDefault();
  addTask(highFormContent.value, PRIORITIES.HIGH);
  render();
  event.target.reset();
}

function addLowTask(event) {
  const lowFormContent = document.querySelector(".add-low-task-field");
  event.preventDefault();
  addTask(lowFormContent.value, PRIORITIES.LOW);
  render();
  event.target.reset();
}

highForm.addEventListener("submit", addHighTask);
lowForm.addEventListener("submit", addLowTask);
