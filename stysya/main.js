const getForm = document.querySelectorAll(".add-high-task");
const highTaskAdd = document.getElementById("high-task");
const lowTaskAdd = document.getElementById("low-task");

const taskAddEnter = function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let newTask = event.target.value;
    if (newTask === "") {
      event.target.placeholder = "Нельзя добавить пустую задачу";
    }
    event.target.placeholder = "Добавить важные дела";
    event.target.insertAdjacentHTML(
      "afterend",
      `<div class="task">
      <input type="checkbox" value="${event.target.value}">
      <div class="todo-list">${event.target.value} </div>
      <button class="delete-task-button">+</button>
        </div>`
    );

    event.target.value = "";
  }
};

highTaskAdd.addEventListener("keypress", taskAddEnter);
