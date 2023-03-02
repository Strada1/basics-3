const TODO = 'To Do';
// const INPROGRESS = 'In Progress';
const DONE = 'Done';
const LOW = 'low';
const HIGH = 'high'

const toDo = {
    list: [
        // {
        //     name: 'приготовить обед', 
        //     status: TODO, 
        //     priority: LOW
        // }
    ],
    addTask(task, statusName, priorityName) {
        let i = 0;
        for (const item of this.list) {
            if (item.name === task) {
                console.log('Такая задача уже существует');
                break;
            }
            i++;
        }
        if (i === this.list.length) {
            this.list.push({ name: task, status: statusName, priority: priorityName });
            console.log('Задача добавлена');
        }
    },
    deleteTask(task) {
        const length = this.list.length;
        for (i = 0; i < length; i++) {
            if (this.list[i].name === task) {
                console.log('Эврика, удаляем!');
                this.list.splice(i, 1);
                break;
            }
        }
        if (length === this.list.length) {
            console.log('Задача не найдена!');
        }
    },
    changeStatus(task, statusName) {
        let i = 0;
        for (const item of this.list) {
            if (item.name === task) {
                item.status = statusName;
                console.log('Статус изменен');
                break;
            }
            i++;
        }
        if (i === this.list.length) {
            console.log('Задача не найдена!');
        }
    },
    showStatus(statusName) {
        let i = 0;
        console.log(statusName);
        for (const item of this.list) {
            if (item.status === statusName) {
                i++;
                console.log(item.name + ":", item.status, `(приоритет ${item.priority})`);
            }
        }
        if (i === 0) {
            console.log("Nothing is", statusName);
        }
    },
    showList() {
        this.showStatus(TODO);
        // this.showStatus (INPROGRESS);
        this.showStatus(DONE);
    }
}


function add_divTaskHigh() {
    const container = document.getElementById('areaTaskHigh');
    const input = document.getElementById('inputTaskHigh');
    add_divTask(container, input, HIGH);
}


function add_divTaskLow() {
    const container = document.getElementById('areaTaskLow');
    const input = document.getElementById('inputTaskLow');
    add_divTask(container, input, LOW);
}


function add_divTask(areaTask, inputText, priority) {
    console.log("add_divTaskHigh(): start");

    const newDiv = document.createElement('div');
    newDiv.className = "taskForm";

    const checkBoxTask = document.createElement('input');
    checkBoxTask.className = "checkboxTask";
    checkBoxTask.type = "checkbox";
    checkBoxTask.addEventListener('click', change_divTask);

    const newDivTaskText = document.createElement('div');
    newDivTaskText.className = "taskText";
    newDivTaskText.textContent = inputText.value;
    inputText.value = '';

    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'x';
    buttonDelete.className = "buttonх";
    buttonDelete.addEventListener('click', delete_divTask);

    areaTask.appendChild(newDiv);
    newDiv.appendChild(checkBoxTask);
    newDiv.appendChild(newDivTaskText);
    newDiv.appendChild(buttonDelete);

    toDo.addTask(newDivTaskText.textContent, TODO, priority);
    // console.log('*****************');
    // console.log(toDo.showList());
}


function change_divTask() {
    const parent = this.parentElement;
    let text = parent.querySelector(".taskText");
    if (text) {
        text.className = "doneText";
        toDo.changeStatus(text.textContent, DONE);
        this.disabled = true;
    } else {
        return;
    }
}


function delete_divTask() {
    const parent = this.parentElement;
    let text = parent.querySelector(".taskText");
    if (!text) {
        text = parent.querySelector(".doneText");
    }
    toDo.deleteTask(text.textContent);
    parent.remove();

    console.log('*****************');
    console.log(toDo.showList());
}


function onInit() {
    const addTaskHigh = document.getElementById('addTaskHigh');
    const addTaskLow = document.getElementById('addTaskLow');

    addTaskHigh.addEventListener('click', add_divTaskHigh);
    addTaskLow.addEventListener('click', add_divTaskLow);
}

onInit();

