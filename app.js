
const STATUSES = {
    TODO: "To Do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
};
const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};

const list = [
    {name: 'create a post', status: 'In progress', priority: 'low'},
    {name: 'test', status: 'To Do', priority: 'high'},
    {name: 'make task', status: 'To Do', priority: 'low'},
    {name: 'create todo', status: 'In progress', priority: 'high'},

];


function changeStatus(statusName,statusValue){
    const index = list.findIndex((elem) => elem.name = statusName);
    list[index].status = statusValue
}
function addTask(taskStatus = "To Do",taskName,taskPriorities){

    list.push({
        name:taskName,
        status:taskStatus,
        priority:taskPriorities
    })

}
function deleteTask(taskName){
    list.forEach((elem,index) => {
        if(elem.name === taskName)
            list.splice(index,1)

    })


}
function showList() {

    const arrayFindTodo = list.filter((elem) => elem.status === "To Do")
    const arrayFindDone = list.filter((elem) => elem.status === "Done")
    const arrayFindProgress = list.filter((elem) => elem.status === "In progress")


    if(STATUSES.TODO === "To Do"){
        console.log(STATUSES.TODO + ":")
        arrayFindTodo.forEach((elem)=> console.log('\t' + elem.name))
    }
    if(STATUSES.DONE === "Done"){

        console.log(STATUSES.DONE + ":")
        arrayFindDone.forEach((elem)=> console.log('\t' + elem.name))
    }
    if(STATUSES.IN_PROGRESS === "In progress"){

        console.log(STATUSES.IN_PROGRESS + ":")
        arrayFindProgress.forEach((elem)=> console.log('\t' + elem.name))
    }


}
changeStatus("create a post", "Done")
addTask(STATUSES.DONE,'have a walk', PRIORITIES.HIGH);
deleteTask('test');
showList();