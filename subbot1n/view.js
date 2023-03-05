const STATUS = {
    TO_DO: "To Do",
    DONE: "Done",
};
const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
};
const defaultTaskStatus = STATUS.TO_DO;

const list = [ 
    {name: 'Сверстать этот TODO list', status: STATUS.TO_DO, priority: PRIORITY.LOW,},
    {name: 'Полить цветы', status: STATUS.TO_DO, priority: PRIORITY.LOW,}, 
    {name: 'Сделать уборку', status: STATUS.DONE, priority: PRIORITY.HIGH,}, 
    {name: 'Посмотреть ютубчик', status: STATUS.TO_DO, priority: PRIORITY.LOW,}, 
];

const newTaskHigh = document.getElementById('task_input_high');
const newTaskLow = document.getElementById('task_input_low');
const taskForm = document.querySelectorAll('form');
let btnDelete;
let checkboxElements; 
let changeStatusId;
let id;

function handleFormSubmit(event) {
    event.preventDefault();
    let curentPriority;
    let TaskValue;
    if (newTaskHigh.value) {
        TaskValue = newTaskHigh.value;
        curentPriority = PRIORITY.HIGH;
    }
    if (newTaskLow.value) {
        TaskValue = newTaskLow.value;
        curentPriority = PRIORITY.LOW;
    }
    addTask(TaskValue, curentPriority)
    clearTask()
    render();
    event.target.reset(); 
}

function clearTask(){
    let taskRemove = document.querySelectorAll('.newtask')
    taskRemove.forEach( e => e.remove() );
}

taskForm.forEach(item => {
    item.addEventListener('submit', handleFormSubmit)
})

function addTaskDiv(TaskValue, previousElement, id, checked){
    const newDiv = document.createElement('div');
    let checkboxchecked ='';
    if (checked) {
        newDiv.className = 'task_completed';
        checkboxchecked = 'checked';
    }    
    newDiv.className += ' task newtask';
    newDiv.innerHTML = `<input class="checkbox" id = "${id}id" type="checkbox" ${checkboxchecked}><div>
    <p class="task_text">${TaskValue}</p></div>
    <input type="image" class="btn_delete" id="${id}" src="delete.svg">`;
    previousElement.after(newDiv);
}

function addTask(TaskValue, curentPriority){
    list.push({name:TaskValue, status:defaultTaskStatus, priority:curentPriority});
};

function btnDeleteClic(){
    btnDelete.forEach(item => { 
        item.addEventListener('click', e => {
            let delId = e.target.getAttribute('id');
             delTask(delId);
            });
    })
}

function delTask(delId){
    const pos = list.findIndex(task => task.id == delId);
   list.splice(pos,1);
    clearTask()
    render();
};

function render(){
    let previousElement;
    id = 0;
    let checked = false;
    for (const task of list){
        if (task.priority === PRIORITY.HIGH) { 
        previousElement = document.querySelector('#form_high');
        if (task.status === STATUS.DONE){checked = true};
        addTaskDiv(task.name, previousElement,id, checked);
        task.id = id;
        id++;
        checked = false;
        }
        if (task.priority === PRIORITY.LOW) {
        previousElement = document.querySelector('#form_low');
        if (task.status === STATUS.DONE){checked = true};
        addTaskDiv(task.name, previousElement, id, checked);
        task.id = id;
        id++;
        checked = false;
        };
    };
    btnDelete = document.querySelectorAll('.btn_delete');
    checkboxElements = document.querySelectorAll('.checkbox');
    btnDeleteClic();
    checkboxCheckedClicListener();
};    

function checkboxCheckedClicListener(){
    checkboxElements.forEach(item => { 
        item.addEventListener('click', e => {
            changeStatusId = parseInt(e.target.getAttribute('id'));
            changeStatus(changeStatusId);
        });
    });
};

function changeStatus(changeStatusId){
    let changeStatusTask = list.findIndex(task => task.id == changeStatusId);
    if (list[changeStatusTask].status === STATUS.DONE){
        list[changeStatusTask].status = STATUS.TO_DO;
        clearTask();
        render();
        return;
    }
    if (list[changeStatusTask].status === STATUS.TO_DO){
        list[changeStatusTask].status = STATUS.DONE;
        clearTask();
        render();
        return;
    }
};

render();