const statuses = {
    ToDo: 'ToDo',
    InProg: 'In progress',
    Done: 'Done'
}

const priorities = {
    low: 'low',
    med: 'medium',
    high: 'hidh'
}

const list = [
    { name: 'create a post', status: statuses.ToDo, priority: priorities.med },
    { name: 'test', status: statuses.InProg, priority: priorities.low }
];

function showTaks(arr) {
    arr.forEach(e => {
        console.log(`name : ${e.name}, status : ${e.status}, priority : ${e.priority}` );
    });
}

showTaks(list);