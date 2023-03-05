const PRIORITY = {
    HIGH: 'high',
    LOW: 'low'
};

const STATUS = {
    TO_DO: 'to do',
    DONE: 'done'
};

const highTaskForm = document.getElementById('highTaskForm');
const lowTaskForm = document.getElementById('lowTaskForm');
const highTaskInput = document.getElementById('highTaskInput');
const lowTaskInput = document.getElementById('lowTaskInput');
const highTasksBlock = document.getElementById('highTasks');
const lowTasksBlock = document.getElementById('lowTasks');

export { PRIORITY, STATUS, highTaskForm, lowTaskForm, 
    highTaskInput, lowTaskInput, highTasksBlock, lowTasksBlock }