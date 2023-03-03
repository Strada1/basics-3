const PRIORITIES = {
  HIGH: "High",
  LOW: "Low",
};

const STATUSES = {
  TODO: "To Do",
  DONE: "Done",
};

const highForm = document.querySelector(".high-task-field");
const highFormContent = document.querySelector(".add-high-task-field");

const lowForm = document.querySelector(".low-task-field");
const lowFormContent = document.querySelector(".add-low-task-field");

const highTaskCollector = document.querySelector(".high-task-collector");
const lowTaskCollector = document.querySelector(".low-task-collector");

const list = [
  // { id: 1, name: "wash the car", status: "To Do", priority: "High" },
  // { id: 2, name: "create a post", status: "To Do", priority: "High" },
  // { id: 3, name: "suck", status: "To Do", priority: "Low" },
];

function render() {
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
render();

function addTask(contentForm, priority) {
  const taskText = contentForm;
  if (taskText === "") {
    alert("Cant be empty");
  } else {
    list.splice(0, 0, {
      id: Date.now(),
      name: taskText,
      status: STATUSES.TODO,
      priority: priority,
    });
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
function deleteTasksFromArray() {
  const taskFromArray = document.querySelectorAll(".task");
  if (taskFromArray) {
    taskFromArray.forEach((taskFromArray) => taskFromArray.remove());
  }
}
// //функции для добавления в поля ввысокого и низкого приоритетов
function addHighTask(event) {
  event.preventDefault();
  addTask(highFormContent.value, PRIORITIES.HIGH);
  render();
  event.target.reset();
}
function addLowTask(event) {
  event.preventDefault();
  addTask(lowFormContent.value, PRIORITIES.LOW);
  render();
  event.target.reset();
}

highForm.addEventListener("submit", addHighTask);
lowForm.addEventListener("submit", addLowTask);
