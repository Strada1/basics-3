let formHigh = document.getElementById("inputChildDiv1")
let formLow = document.getElementById("inputChildDiv2")
const highTasks = document.getElementById('highTask');
const lowTasks = document.getElementById('lowTask');
const highInp = document.getElementById('highInput')
const lowInp = document.getElementById('lowInput')
const addHigh = document.getElementById('addHighDiv')
const addLow = document.getElementById('addLowDiv')

function addHighTask(e){
if(highInp.value===""){
    alert("Вы ничего не ввели!");
}else{

console.log(highInp.value)
highTasks.insertAdjacentHTML('beforeend', `<div class='tasksDivs'><div class='tasksDiv'><div><input type='checkbox' class='checkbox' /></div><span> ${highInp.value} </span><div><div class='deleteDiv'></div></div></div></div>`);
e.preventDefault();
}



}
function addLowTask(e){
    if(lowInp.value===""){
        alert("Вы ничего не ввели!");
    }else{
    lowTasks.insertAdjacentHTML('beforeend', `<div class='tasksDivs'><div class='tasksDiv'><div><input type='checkbox' class='checkbox' /></div><span> ${lowInp.value} </span><div><div class='deleteDiv'></div></div></div></div>`);
    e.preventDefault();
    }
    
}

formHigh.addEventListener("submit",addHighTask)
formLow.addEventListener("submit",addLowTask)
addHigh.addEventListener("click",addHighTask)
addLow.addEventListener("click", addLowTask)



