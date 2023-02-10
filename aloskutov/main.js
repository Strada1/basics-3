const list = [
    {name: 'create a post', status: 'In progress', priority: 'Low'},
    {name: 'test', status: 'Done', priority: 'High'}
];
function changeStatus(name, stat, prior) {
    for (key in list) {
        if (list[key].name === name) {
            list[key].status = stat;
            list[key].priority = prior;
        }
    }
}
function addTask(nam, stat, prior) {
    list.push({name: nam, status: stat, priority: prior});
}
function deleteTask(nam) {
    let ind = list.findIndex(el => el.name === nam);
    list.splice(ind, 1);
}
function showList() {
    let a = 0;
    let b = 0;
    let c = 0;
    for (key in list) {
        if (list[key].status === 'Done') {
            a++;
            console.log(list[key].name + " : " + list[key].status + " : " + list[key].priority);
        } else if (list[key].status === 'In progress') {
            b++;
            console.log(list[key].name + " : " + list[key].status + " : " + list[key].priority);
        } else if (list[key].status === 'Todo') {
            c++;
            console.log(list[key].name + " : " + list[key].status + " : " + list[key].priority);
        }
    }
    if (a <= 0) {
        console.log('Nothing in Done');
    }; if (b <= 0) {
        console.log('Nothing in Progress')
    }; if (c <= 0) {
        console.log('Nothing in Todo')
    }
}
addTask('make a program', 'In progress', 'High');
changeStatus('create a post', 'Done', 'Low');
deleteTask('make a program');
showList();