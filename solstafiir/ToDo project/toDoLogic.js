const highForm = document.querySelector(".high-task-field");
const highFormContent = document.querySelector(".add-high-task-field");

const lowForm = document.querySelector(".low-task-field");
const lowFormContent = document.querySelector(".add-low-task-field");

const highTaskCollector = document.querySelector(".high-task-collector");
const lowTaskCollector = document.querySelector(".low-task-collector");

function createTask(formValueContent, collection) {
  const taskCanvas = document.createElement("div");
  taskCanvas.className = "task";

  const checkBox = document.createElement("input");
  checkBox.className = "check";
  checkBox.type = "checkbox";
  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      taskCanvas.style.background = "lightgreen";
      checkBox.removeEventListener();
    } else {
      taskCanvas.style.background = "white";
    }
  });

  const content = document.createElement("div");
  content.className = "todo-content";
  content.textContent = formValueContent;
  if (content.textContent === "") {
    return alert("Task field can`t be empty!");
  }

  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.className = "delete-task-button";
  deleteTaskButton.textContent = "+";

  deleteTaskButton.addEventListener("click", () => deleteTask(taskCanvas));

  collection.prepend(taskCanvas);
  taskCanvas.prepend(content);
  taskCanvas.prepend(checkBox);
  taskCanvas.appendChild(deleteTaskButton);
}

function addHighTask(event) {
  event.preventDefault();
  createTask(highFormContent.value, highTaskCollector);
  event.target.reset();
}

function addLowTask(event) {
  event.preventDefault();
  createTask(lowFormContent.value, lowTaskCollector);
  event.target.reset();
}

function deleteTask(task) {
  task.remove();
  task.removeEventListener();
}

highForm.addEventListener("submit", addHighTask);
lowForm.addEventListener("submit", addLowTask);
