const todoInputs = document.querySelectorAll(".todo__input");
const highPriorityInput = document.getElementById("high-priority-input");
const lowPriorityInput = document.getElementById("low-priority-input");

const addTaskByEnter = function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        let newTask = event.target.value;
        if (newTask === "") {
            event.target.placeholder = "Нельзя добавить пустую задачу";
        }

        else {
            event.target.placeholder = "Добавить";
            event.target.insertAdjacentHTML("afterend", ` <div class="todo__task">
            <label class="todo__label">
                <input type="checkbox" value="${event.target.value}">
                <span class="checkbox"></span>
                ${event.target.value}</label>
                <button class="todo__button delete-button">x</button>
        </div>`)
            event.target.value = "";
        }
    }
}


highPriorityInput.addEventListener("keydown", addTaskByEnter);
lowPriorityInput.addEventListener("keydown", addTaskByEnter);
