


const taskList = [];
const highTasks = document.querySelector("#highTask")
const lowTasks = document.querySelector("#lowTask")



function add(nameTask, priority, status, id){
    taskList.push({name:nameTask,priority:priority, status:status, id:id})
}

let renderCounter = 0;

function render(){

    taskList.forEach(task => {
        
            if(task.priority === "HIGH"){
                highTasks.insertAdjacentHTML('beforeend', `<div id="${task.id}" class='tasksDivs'><div class='tasksDiv'><div><input type='checkbox' class='checkbox' /></div><span> ${task.name}  </span><button type="button" class='deleteDiv'></button></div></div>` ) 
            }else{
                lowTasks.insertAdjacentHTML('beforeend', `<div id="${task.id}" class='tasksDivs'><div class='tasksDiv'><div><input type='checkbox' class='checkbox' /></div><span> ${task.name}  </span><button type="button" class='deleteDiv'></button></div></div>` ) 
            }
    });
}



const addButton = document.querySelectorAll('.buttonAdd')


let counter = 0;

function addTask(e){
    deleteOldTask()
    const highInput = document.querySelector('#highInput')
    const lowInput = document.querySelector('#lowInput')
    if(e.target.id === "addHighDiv" || e.target.id === "inputChildDiv1" ){
        add(highInput.value, "HIGH", "ToDo", ++counter);
    }else{
        add(lowInput.value, "LOW", "ToDo", ++counter);
    }
    console.log(taskList)
    e.preventDefault()
    render()
}

function deleteOldTask(){

    const newTask = document.querySelectorAll(".tasksDivs")
    if(newTask){
        newTask.forEach(task =>{
            task.remove()
        })
    }
    console.log(taskList)
}

addButton.forEach(function(e){
    e.addEventListener('click', addTask)
})





    
function deleteTask(e) {
    if (e.target.classList.contains('deleteDiv')) {
        if(e.target.closest("#highTask") !== null){
            const ids = Number(e.target.closest(".tasksDivs").id)
            console.log(typeof ids)
            const objectToDel = taskList.findIndex(name=> name.id===ids)
            console.log(objectToDel)
            console.log(taskList)
            taskList.splice(objectToDel,1)
            highTasks.removeChild(e.target.closest(".tasksDivs"))

        }else{
            const ids = Number(e.target.closest(".tasksDivs").id)
            console.log(typeof ids)
            const objectToDel = taskList.findIndex(name=> name.id===ids)
            console.log(objectToDel)
            console.log(taskList)
            taskList.splice(objectToDel,1)
            lowTasks.removeChild(e.target.closest(".tasksDivs"))
        }
    }
  
  }
document.addEventListener("click", deleteTask);



let formHigh = document.getElementById("inputChildDiv1")
let formLow = document.getElementById("inputChildDiv2")
formHigh.addEventListener("submit",addTask)
formLow.addEventListener("submit",addTask)


function changeStatus(e){
    
    
    // .checkbox:checked {
    //     background-color: rgb(77, 225, 255);
    //     border: 1px solid rgb(77, 225, 255);
    //     background-image: url(https://www.svgrepo.com/download/494649/arrow-bottom4.svg);
    //     background-size: contain;
    //}




if(e.target.classList.contains('checkbox')) {

    if(e.target.closest("#highTask") !== null){
        const ids = Number(e.target.closest(".tasksDivs").id)
        console.log(typeof ids)
        const objectToChange = taskList.find(name=> name.id===ids)
        console.log(objectToChange)
        if(objectToChange.status === "ToDo"){
            e.target.style.backgroundColor = "rgb(77, 225, 255)";
            e.target.style.border = "1px solid rgb(77, 225, 255)"
            e.target.style.backgroundImage = "url(https://www.svgrepo.com/download/494649/arrow-bottom4.svg)";
            e.target.style.backgroundSize = "contain"
            objectToChange.status = "Done"
        }else{
            e.target.style.backgroundColor = "gray";
            e.target.style.border = "1px solid gray"
            e.target.style.backgroundImage = "none";
            e.target.style.backgroundSize = "contain"
            objectToChange.status = "ToDo"
        }
        console.log(taskList)
        
        

    }else{
        const ids = Number(e.target.closest(".tasksDivs").id)
        console.log(typeof ids)
        const objectToChange = taskList.find(name=> name.id===ids)
        console.log(objectToChange)
        if(objectToChange.status === "ToDo"){
            objectToChange.status = "Done"
        }else{
            objectToChange.status = "ToDo"
        }
        console.log(taskList)
        
        
    }

}
    
}
document.addEventListener("click", changeStatus)
