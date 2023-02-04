let list = {
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do",
}
// function showList() {
//     for (const name in list) {
//         console.log(name);
//         console.log(list[name]);
//     }
// }
function showList() {
    let i = 0;
    let q = 0;
    let x = 0;
    for (key in list) {
        if (list[key] === 'Done' && x < 1) {
            x++;
            console.log(`\n\"${key}\" : ${list[key]}`);
        } else if ((list[key] === 'Done' && x >=1)) {
            x++;
            console.log(`\"${key}\" : ${list[key]}`);
        }
    };
    for (key in list) {
        if (list[key] === 'In Progress' && i < 1) {
            i++;
            console.log(`\n\"${key}\" : ${list[key]}`);
        } else if ((list[key] === 'In Progress' && i >= 1)) {
            i++;
            console.log(`\"${key}\" : ${list[key]}`);
        }
    };
    for (key in list[key]) {
        if (list[key] === 'To do' && i < 1) {
            q++;
            console.log(`\n\"${key}\" : ${list[key]}`);
        } else if ((list[key] === 'Done' && q >= 1)) {
            q++;
            console.log(`\"${key}\" : ${list[key]}`);
        }
    };
    if (q === 0) {
        console.log('\nNothing is \'To Do\'');
    }
    if (x === 0) {
        console.log('\nNothing is \'Done\'');
    }
    if (i === 0) {
        console.log('\nNothing is \'In Progress\'');
    }
}
function addTask(name) {
    list[name] = 'In Progress';
}
function deleteTask(name) {
    delete list[name];
}
function changeStatus(name, stat) {
    list[name] = stat;
}
addTask("write a program");
deleteTask('make a bed');
changeStatus('write a post', 'Done');
showList();