const list = [
    {task:"не придти на пары" , status:"Done" , priority:'hight'},
    {task:"придти на все пары" , status:"In progress" , priority:'medium'},
    {task:"сделать домашку" , status:"To Do" , priority:'low'},
    {task:"сделаfdть домашку" , status:"To Do" , priority:'low'}
]
    function addTask (task , status , priority) {
        list.push ({task , status , priority})
}
    function delTask (i) {
        list.splice (i , 1)
}
    function changeStatus (i, newStatus) {
        list[i].status = newStatus
}
function showList() {
    for (key in list) {
        if (list[key].status === 'Done') {
            console.log(`|task| : ${list[key].task} |status| : ${list[key].status} |priority| : ${list[key].priority}`);
    } 
        if (list[key].status === 'In progress') {
            console.log("|task| : " + list[key].task + " |status| : " + list[key].status + " |priority| : " + list[key].priority);
    } 
        if (list[key].status === 'To Do') {
            console.log("|task| : " + list[key].task + " |status| : " + list[key].status + " |priority| : " + list[key].priority);
        }
    }
}

showList ()

console.log ((list.map)(list => list.task))

delTask (0)

showList ()

addTask ("dfdf","Done","dfdfg")

console.log ((list.map)(list => list.task))

showList ()

changeStatus (3,"To Do")

console.log ((list.map)(list => list.task))

showList ()
