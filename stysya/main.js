const hightDiv = document.querySelector(".high");
const lowDiv = document.querySelector(".low");
const highTaskValue = document.querySelector(".input-1");
const lowTaskValue = document.querySelector(".input-2");

const allHighTasks = document.querySelector(".allHighTask");
const allLowTasks = document.querySelector(".allLowTask");

const buttonAddHigh = document.querySelector(".plusHigh");
const buttonAddLow = document.querySelector(".plusLow");
buttonAddLow.addEventListener("click", addLowTaskes);
buttonAddHigh.addEventListener("click", addHighTask);

const STATUS = {
  TO_DO: "ToDo",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

function clearHigh() {
  while (allHighTasks.firstChild) {
    allHighTasks.removeChild(allHighTasks.firstChild);
  }
}
function clearLow() {
  while (allLowTasks.firstChild) {
    allLowTasks.removeChild(allLowTasks.firstChild);
  }
}

const LIST = [];

function render() {
  highTaskValue.value = "";
  lowTaskValue.value = "";
  clearHigh();
  clearLow();

  for (let i = 0; i < LIST.length; i++) {
    const priority = "." + LIST[i].priority;
    const priorityDiv = document.querySelector(priority);

    const newDiv = document.createElement("div");
    newDiv.classList.add("task-1");
    newDiv.insertAdjacentHTML(
      "afterbegin",
      `<input type="radio" class="radio" ${
        LIST[i].status == "Done" ? "checked" : ""
      }> 
      <p class="text">${LIST[i].name}</p>
      <button class="delete" type="submit">×</button>`
    );

    LIST[i].status == "Done" ? (newDiv.style.backgroundColor = "#c4c4c4") : "";

    newDiv.querySelector("input").addEventListener("click", changeStatusUI);
    newDiv.querySelector(".delete").addEventListener("click", deleteTaskUI);
    priorityDiv.querySelector(".list").append(newDiv);
  }
}

render();

function addHighTask(
  event,
  name,
  priority = PRIORITY.HIGH,
  status = STATUS.TO_DO
) {
  name = highTaskValue.value;
  let obgect = { name, status, priority };

  if (name !== "") {
    LIST.unshift(obgect);
  } else {
    alert("Запишите задачу");
  }

  event.preventDefault();
  render();
}

function addLowTaskes(
  event,
  name,
  priority = PRIORITY.LOW,
  status = STATUS.TO_DO
) {
  name = lowTaskValue.value;
  let obgect = { name: name, status: status, priority: priority };
  if (name !== "") {
    LIST.unshift(obgect);
  } else {
    alert("Запишите задачу");
  }
  event.preventDefault();
  render();
}

function changeStatusUI(event, name) {
  name = event.target.parentNode.querySelector(".text").innerText;
  let position = LIST.findIndex((item) => item.name == name);
  if (LIST[position].status == "Done") {
    LIST[position].status = STATUS.TO_DO;
  } else {
    LIST[position].status = STATUS.DONE;
  }
  render();
}

function deleteTaskUI(event, name) {
  name = event.target.previousElementSibling.textContent;
  let position = LIST.findIndex((item) => item.name == name);
  if (position >= 0) {
    LIST.splice(position, 1);
  } else {
    console.log(`Such - "${name}" task does not exist`);
  }
  render();
}

const addTask = (name, priority = "low", status = "ToDo") => {
  let obgect = { name: name, status: status, priority: priority };
  LIST.unshift(obgect);
  render();
};

const deleteTask = (name) => {
  const index = LIST.findIndex((names) => names.name === name);
  LIST.splice(index, 1);
  render();
};
