const STATUS = {
    TO_DO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In Progress",
    DEFAULT: "To Do",
};

const PRIORITY = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low',
    DEFAULT: 'high',
};

const ERRORS = {
    NOT_EXIST: ": такой задачи нет в списке",
};

const list = [{
        name: 'create a post',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.HIGH
    },
    {
        name: 'test',
        status: STATUS.DONE,
        priority: PRIORITY.LOW
    },
    {
        name: 'create a new practice',
        status: STATUS.TO_DO,
        priority: PRIORITY.HIGH
    },
    {
        name: 'write a post',
        status: STATUS.DONE,
        priority: PRIORITY.LOW
    }
];

// const list = [];


const tasksList = document.querySelectorAll('.todo-item-list');
const taskListWithPriorityHigh = document.querySelector('.todo-item-list-high');
const taskListWithPriorityLow = document.querySelector('.todo-item-list-low');
const btnListAddTask = document.querySelectorAll('.todo-add input');
const formForTaskWithPriorityHigh = document.querySelector('.form-tasks-high');
const formForTaskWithPriorityLow = document.querySelector('.form-tasks-low');
let countId = 1;

formForTaskWithPriorityHigh.addEventListener('submit', function () {
    addTask(btnListAddTask[0].value, PRIORITY.HIGH, list);
    btnListAddTask[0].value = '';
    render();
});

formForTaskWithPriorityLow.addEventListener('submit', function () {
    addTask(btnListAddTask[1].value, PRIORITY.LOW, list);
    btnListAddTask[1].value = '';
    render();
});

function createTaskMarkup(taskName) {
    const newTaskBlock = `<input type="checkbox" id="${countId}"><label for="${countId}">${taskName}</label>
    <button class="btn-del-task" type="remove">
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.5" x2="20.7803" y2="-0.5"
            transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)" stroke="#998899" />
        <line y1="-0.5" x2="20.8155" y2="-0.5"
            transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)" stroke="#998899" />
    </svg>
    </button>`;
    const newTask = document.createElement('div');
    newTask.className = 'todo-item';
    newTask.innerHTML = newTaskBlock;
    countId++;
    return newTask;
}

function render() {
    taskListWithPriorityHigh.innerHTML = '';
    taskListWithPriorityLow.innerHTML = '';
    list.forEach((task, i) => {
        const newTask = createTaskMarkup(task.name);
        const btnListDeleteTask = newTask.querySelector('.btn-del-task');
        btnListDeleteTask.addEventListener('click', function () {
            deleteTask(i);
        });
        let priority = task.priority;
        if (priority === PRIORITY.HIGH) {
            taskListWithPriorityHigh.appendChild(newTask);
        }
        if (priority === PRIORITY.LOW) {
            taskListWithPriorityLow.appendChild(newTask);
        }
    });
}

function addTask(name, priorityNewTask, list) {
    list.push({
        name,
        status: STATUS.DEFAULT,
        priority: priorityNewTask,
    });
}

function deleteTask(indexToDelete) {
    list.splice(indexToDelete, 1);
    render();
}

render();