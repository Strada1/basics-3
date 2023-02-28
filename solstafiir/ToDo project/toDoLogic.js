const highForm = document.querySelector(".labell");
const highFormContent = document.querySelector(".add-high-task-field");

function createTask() {
  const taskCanvas = document.createElement("div");
  taskCanvas.className = "task";

  const checkBox = document.createElement("input");
  checkBox.className = "check";
  checkBox.type = "checkbox";
  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      taskCanvas.style.background = "lightgreen";
      // checkBox.removeEventListener();
    } else {
      taskCanvas.style.background = "white";
    }
  });

  const content = document.createElement("div");
  content.className = "todo-content";
  content.textContent = highFormContent.value;

  const deleteTaskButton = document.createElement("button");
  deleteTaskButton.className = "delete-task-button";
  deleteTaskButton.textContent = "+";

  highForm.appendChild(taskCanvas);
  taskCanvas.prepend(content);
  taskCanvas.prepend(checkBox);
  taskCanvas.appendChild(deleteTaskButton);
}

function addTask(event) {
  event.preventDefault();
  createTask();
}

highForm.addEventListener("submit", addTask);
