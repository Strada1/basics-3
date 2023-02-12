const STAT = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done'
};



const ERRORS = {

    CHANGE_STATUS_UNDEFINED: `
    Seems like you've forgotten to set the second argument in function.
    Please, set task's status as a second function's argument and try again.`,

    CHANGE_STATUS_NAME: `
    Incorrect status name.
    You can only use 'to do', 'in progress' or 'done' variables for task's status. 
    Please, change the variable you want to set and try again.`,


    ADD_TASK_NAME: `
    Incorrect task name.
    Please, use only letters, numbers or symbols in quotes (example: 'Task').`,

    ADD_TASK_EXIST: `
    The task you want to add is already exist.
    If you want to change its status, use the changeTask() function.`,

    ADD_NUMBER_NAME: `
    Incorrect number format.
    Please, use only numbers without any quotes.`,


    DELETE_TASK_EXIST: `
    You are trying to delete the task that doesn't exist.
    Please, check the correctness of data you entered and try again.

    (You can also list all existed tasks by using the showList() function).`,
};



function isInvalid(argument) {
    if (!Number.isInteger(argument) || argument < 1 || argument > toDo.list.length) {
        return true;
    } else {
        return false;
    };
};




const toDo = {

    list: [
    {task: 'build an Ikea wardrobe', status: STAT.TO_DO},
    {task: 'pet the cat', status: STAT.TO_DO},
    {task: 'do something cool', status: STAT.IN_PROGRESS}
    ],


    
    changeStatus(task, status) {

        if (!status) {
            return console.log(ERRORS.CHANGE_STATUS_UNDEFINED);
        }
        else if (typeof status != 'string'
        || (status.toLowerCase() != STAT.TO_DO.toLowerCase()
        & status.toLowerCase() != STAT.IN_PROGRESS.toLowerCase()
        & status.toLowerCase() != STAT.DONE.toLowerCase())) {
            return console.log(ERRORS.CHANGE_STATUS_NAME);
        };


        if (typeof task === 'string') {
            
            const foundedTask = toDo.list.find(existed => 
            existed.task.toLowerCase() == task.toLowerCase());

            if (!foundedTask) {
            return console.log(`
            You are trying to change status of task that doesn't exist.
            Please, add "${task}" in ToDo list by using the addTask() function.`);

            } else {
            foundedTask.status = status;
            return console.log(`
            The status of "${task}" task has successfully changed to "${status}".`);
            };
        };

        if (typeof task === 'number' && isInvalid(task)) {
            return console.log(`
            Task number ${task} doesn't exist.
            Please, check the correctness of task's number you entered and try again.`);

            } else {
            toDo.list[task - 1].status = status;
            return console.log(`
            The status of task number ${task} has successfully changed to "${status}".`);
        };
    },



    addTask(task, number) {

        if (typeof task != 'string') {
            return console.log(ERRORS.ADD_TASK_NAME);
        };

        const foundedTask = toDo.list.find(existed => 
        existed.task.toLowerCase() == task.toLowerCase());
        if (foundedTask) {
            return console.log(ERRORS.ADD_TASK_EXIST);
        };


        if (!number) {
            toDo.list.push({task: task, status: STAT.TO_DO});
            return console.log(`
            The "${task}" task has successfully added to the end of the list.
            Use changeTask() function to set its status (the default status is 'To Do').
            
            If you want to add the task to the specific position of the list,
            set the number of the position as a second argument of addTask() function.
            (Example: addTask('task', 2))`);
        };
        

        if (typeof number === 'number' && isInvalid(number)) {
            return console.log(`
            The position number ${number} doesn't exist.

            For that moment the ToDo list contains only ${toDo.list.length} positions.
            Please, set the existed position as a second argument and try again.
                
            Or you can just call the addTask() function without the second argument;
            in that case task "${task}" will be added to the end of the list automatically.`);

        } else if (typeof number === 'number') {
            toDo.list.splice(number - 1, 0, {task: task, status: 'To Do'});
            return console.log(`
            The "${task}" task has successfully added under the number ${number}.`);

        } else {
            console.log(ERRORS.ADD_NUMBER_NAME);
        };
    },



    deleteTask(task) {

        if (typeof task === 'string') {
            const foundedIndex = toDo.list.findIndex(existed => 
                existed.task.toLowerCase() == task.toLowerCase());
            
            if (foundedIndex === -1) {
                return console.log(ERRORS.DELETE_TASK_EXIST);

            } else {
                toDo.list.splice(foundedIndex, 1);
                return console.log(`
            The "${task}" task has successfully deleted.
        
            If you want to delete the task to the specific position of the list,
            set the number of the position as an argument of the deleteTask() function.
            (Example: deleteTask(2))`);
            };
        };

        if (typeof task === 'number' && isInvalid(task)) {
            return console.log(`
            Task number ${task} doesn't exist.
            Please, check the correctness of task's number you entered and try again.`);
        } else {
            toDo.list.splice(task - 1, 1);
            return console.log(`
            The task number ${task} has successfully deleted.`);
        };
    },



    showList() {

        console.log('List of tasks:\n');

        for (const task of toDo.list) {
            let taskNumber = toDo.list.indexOf(task) + 1;
            console.log(`${taskNumber}. ${task.task}: ${task.status}`);
        };
    }
};



// Проверка работоспособности программы:

toDo.changeStatus('pet the dog');
// Ошибка: статус задачи не указан.

toDo.changeStatus('pet the dog', 'in progres');
// Снова ошибка: статус указан некорректно.

toDo.changeStatus('pet the dog', 'in progress');
// Опять ошибка: такой задачи не существует.

toDo.changeStatus('pet the cat', 'in progress');
// Наконец, статус был успешно изменён.

toDo.changeStatus(1, 'in progress');
// Можно изменить статус задачи, просто указав её номер (не индекс!)


toDo.addTask('do something cool');
// Нельзя добавить задачу, т.к. она уже существует.

toDo.addTask('do something awesome');
// Задача добавлена в конец списка.

toDo.addTask('Do something before doing something cool', 3);
/* Можно добавить задачу в середину или в начало списка,
указав конкретный номер в качестве второго аргумента. */


toDo.deleteTask('build an ikea table');
// Задачу нельзя удалить, т.к. её нет в списке.

toDo.deleteTask('build an ikea wardrobe');
// Задача удалена.

toDo.deleteTask(1);
// Можно удалить задачу под конкретным номером, указав его вместо имени задачи.


toDo.changeStatus(3, 'Done');
// Последний штрих ;)


toDo.showList();
// Выводим список всех задач (теперь их снова три)