const ToDo = [
    {name: 'create post', status: 'in progress', priority: 'low'},
    {name: 'test', status: 'done', priority: 'high'},
    {name: 'test1', status: 'todo', priority: 'high'}
]

function filterWithPriority(priority) { // сортировка с выбранным приоритетом исключая выполненые задачи
    return ToDo.filter(
        task => task.priority === priority && task.status !== 'done'
    );

} // сортировка с выбранным приоритетом исключая выполненые задачи

function writeInConsoleTasks(tasks, priority) {
    console.log(`\n ${priority} priority tasks:`);
    if (tasks.length) {
        for (const task of tasks) {
            if (task.status !== 'done')
                console.log(`   ${task.name} ${task.status}`);
        }
    }
    else {
        console.log(`   -`);
    }
}// вывод списка задач в консоль
function viewTasksList() { // функция просмотра не сделанных задач
    const highPriorityTasks = filterWithPriority('high');
    writeInConsoleTasks(highPriorityTasks, 'high');
    const lowPriorityTasks = filterWithPriority('low');
    writeInConsoleTasks(lowPriorityTasks, 'low');
} // просмотр не завершённых задач

function viewDoneTasks () {
    console.log(`\nCompleted tasks:`)
    for (const task of ToDo) {
        if (task.status === 'done')
            console.log(`   ${task.name}`);
    }
} // просмотр завершённых задач

function checkRightArguments(status, priority) {
    const rightStatus = ['todo', 'in progress', 'done'];
    const rightPriority = ['high', 'low'];
    return (rightStatus.findIndex(status1 => status1 === status) !== -1)  && (rightPriority.findIndex(priority1 => priority1 === priority) !== -1);
} // проверка правильности введёных статуса и приоритета
function addTask(task, status, priority) { // добавление задачи
    const checkArgument = checkRightArguments(status, priority)
    if (checkArgument) {
        ToDo.push({name: task, status: status, priority: priority});
        console.log(`\n${task} added to tasks list!`);
    }
    else {
        console.log('\nInvalid arguments. Retry');
    }
} // добавление задачи в список

function delTask(name) {
    let delTask1 = ToDo.findIndex(task => task.name === name);
    if (delTask1 === -1) {
        console.log(`\nTask ${name} not found!`);
        return;
    }
    ToDo.splice(delTask1,1);
    console.log(`\n${name} deleted!`);
} // удаление задачи

function changeTask(name, newStatus, newPriority) {
    const checkArgument = checkRightArguments(newStatus, newPriority);
    if (!checkArgument) {
        console.log('\nInvalid arguments. Retry');
        return;
    }
    const task = ToDo.find(task => task.name === name);
    if (!task) {
        console.log(`Task ${name} not found!`);
        return;
    }
    task.status = newStatus;
    task.priority = newPriority;
    console.log(`\nTask ${name} updated!`);
} // обновление задачи


viewTasksList();
viewDoneTasks();
addTask('add task', 'in progress', 'low');
viewTasksList();
addTask('make dinner', 'todo', 'high');
addTask('open window', 'todo', 'high');
viewTasksList();
delTask('test1');
viewTasksList();
changeTask('make dinner', 'in progress', 'low');
viewTasksList();
changeTask('make dinner', 'in progress1', 'low');
viewTasksList();
changeTask('open window', 'in progress', 'low');
viewTasksList();
changeTask('open window', 'in progress', 'lov');
viewTasksList();
