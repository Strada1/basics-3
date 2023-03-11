const todoInputs = document.querySelectorAll(".todo__input");
const highPriorityInput = document.getElementById("high-priority-input");
const lowPriorityInput = document.getElementById("low-priority-input");
const toDo = document.querySelector(".todo");

const list = [
    /* { name: "Пресс качат", status: "Todo", priority: "High" },
    { name: "Бегит", status: "Done", priority: "High" },
    { name: "Турник", status: "Todo", priority: "High" },
    { name: "Анжумания", status: "Todo", priority: "High" },
    { name: "Адын-дуа раза в дэн уражнение дэлать", status: "Todo", priority: "Low" }, */
];

const render = function () {
    const todoTasks = document.querySelectorAll(".todo__task");
    todoTasks.forEach(task => { task.parentNode.removeChild(task) });

    list.forEach(item => {
        const taskStatus = item.status;
        if (item.priority === "High") {
            if (taskStatus === "Done") {
                document.querySelector(".todo__high-priority-task-list").insertAdjacentHTML("beforeend", ` <div class="todo__task done">
            <label class="todo__label">
                <input type="checkbox" value="${item.name}" checked id="checkbox">
                <span class="checkbox"></span>
                ${item.name}</label>
                <button class="todo__button delete-button">x</button>
        </div>`);
            }

            else if (taskStatus === "Todo") {
                document.querySelector(".todo__high-priority-task-list").insertAdjacentHTML("beforeend", ` <div class="todo__task">
                <label class="todo__label">
                    <input type="checkbox" value="${item.name}" id="checkbox">
                    <span class="checkbox"></span>
                    ${item.name}</label>
                    <button class="todo__button delete-button">x</button>
            </div>`);
            }
        }

        else if (item.priority === "Low") {
            if (taskStatus === "Done") {
                document.querySelector(".todo__low-priority-task-list").insertAdjacentHTML("beforeend", ` <div class="todo__task done">
            <label class="todo__label">
                <input type="checkbox" value="${item.name}" checked id="checkbox">
                <span class="checkbox"></span>
                ${item.name}</label>
                <button class="todo__button delete-button">x</button>
        </div>`);
            }

            else if (taskStatus === "Todo") {
                document.querySelector(".todo__low-priority-task-list").insertAdjacentHTML("beforeend", ` <div class="todo__task">
                <label class="todo__label">
                    <input type="checkbox" value="${item.name}" id="checkbox">
                    <span class="checkbox"></span>
                    ${item.name}</label>
                    <button class="todo__button delete-button">x</button>
            </div>`);
            }
        }
    });
}

const addTaskByEnter = function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const newTask = event.target.value;
        if (newTask.trim() === "") {
            event.target.value = "";
            event.target.placeholder = "Нельзя добавить пустую задачу";
        }

        else {
            event.target.placeholder = "Добавить";
            const taskName = event.target.value;

            if (event.target === highPriorityInput) {
                list.unshift({ name: taskName, status: "Todo", priority: "High" });
            }

            else if (event.target === lowPriorityInput) {
                list.unshift({ name: taskName, status: "Todo", priority: "Low" });
            }

            event.target.value = "";
            render();
            console.log(list);
        }
    }

}

const addTaskByAddButton = function (event) {

    if (event.target.classList.contains("add-button")) {
        event.preventDefault();

        const newTask = event.target.parentNode.querySelector(".todo__input").value;
        if (newTask === "" || newTask === " ") {
            event.target.parentNode.querySelector(".todo__input").value = "";
            event.target.placeholder = "Нельзя добавить пустую задачу";
        }

        else if (newTask != "") {
            event.target.parentNode.querySelector(".todo__input").placeholder = "Добавить";
            const taskName = event.target.parentNode.querySelector(".todo__input").value;

            if (event.target.parentNode.querySelector(".todo__input") === highPriorityInput) {
                list.unshift({ name: taskName, status: "Todo", priority: "High" });
            }

            else if (event.target.parentNode.querySelector(".todo__input") === lowPriorityInput) {
                list.unshift({ name: taskName, status: "Todo", priority: "Low" });
            }
            event.target.parentNode.querySelector(".todo__input").value = "";
            render();
            console.log(list);
        }
    }
    else return;

}

const changeTaskStatus = function (event) {

    if (event.target.classList.contains("checkbox")) {
        /* event.preventDefault(); */
        const checkbox = event.target.parentNode.querySelector("#checkbox");
        const taskForChangeStatus = checkbox.value;
        const indexOfTaskForChangeStatus = list.indexOf(list.find(task => task.name === taskForChangeStatus));
        if (checkbox.checked === true) {
            list[indexOfTaskForChangeStatus].status = "Todo";
            console.log(list);
        }

        else if (checkbox.checked === false) {
            list[indexOfTaskForChangeStatus].status = "Done";
            console.log(list);
        }
        render();
    }

    else return;
};

const removeTask = function (event) {
    if (event.target.classList.contains("delete-button")) {
        event.preventDefault();
        const taskForDelete = event.target.parentNode.querySelector(".todo__label").textContent.trim();
        const indexOfTaskForDelete = list.indexOf(list.find(task => task.name === taskForDelete));
        list.splice(indexOfTaskForDelete, 1);
        console.log(list);
        render();
    }

    else return;
};

render();
highPriorityInput.addEventListener("keydown", addTaskByEnter);
lowPriorityInput.addEventListener("keydown", addTaskByEnter);
toDo.addEventListener("click", addTaskByAddButton);
toDo.addEventListener("click", removeTask);
toDo.addEventListener("click", changeTaskStatus);
