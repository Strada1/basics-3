const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} ,
  {name: 'another task', status: 'To Do', priority: 'high'} 
];

const defaultStatus = 'To Do';
const defaultPriority = 'low';

const changeStatus = (taskName, status) => {
    const taskIndex = list.findIndex(item => item.name === taskName);

    if(taskIndex === -1) {
        console.log('Task not found...')
        return;
    }

    list[taskIndex].status = status;

}

const addTask = (taskName, status = defaultStatus,priority = defaultPriority) => {
    const newTask = {
        name:taskName,
        status: status,
        priority:priority,
    }

    list.push(newTask)
}

const removeTask = (taskName) => {
   const targetTaskIndex = list.findIndex(task => task.name === taskName);
   if(targetTaskIndex === -1) {
    console.log('Task not found...');
    return;
   }
   list.splice(targetTaskIndex,1)
}

const showList = () => {
    const todo = list.filter(item => item.status === 'To Do')
    const done = list.filter(item => item.status === 'Done')
    const inProgress = list.filter(item => item.status === 'In progress')

    const render = (arrayOfTasks, title) => {
        console.log(`${title}:`)
        if(arrayOfTasks.length === 0) {
            console.log('-')
            return;
        }
        arrayOfTasks.forEach(task => console.log(`--- ${task.name}`))
    }

    render(todo, 'To Do');
    render(done, 'Done'),
    render(inProgress, 'In Progress')
    if(done.length === 0) console.log('Nothing is Done...')
}

console.log(list)

// removeTask('test')

// console.log(list)
showList()