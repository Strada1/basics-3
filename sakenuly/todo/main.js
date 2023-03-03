const hCheckboxList = document.getElementById('hcheckboxlist');
const lCheckboxList = document.getElementById('lcheckboxlist');
const high = document.getElementById('high-input');
const highCheckDiv = document.getElementById('hcheckbox');
const low = document.getElementById('low-input');
const lowCheckDiv = document.getElementById('lowcheckbox');
import {changeStatus, list,  addTask, showTask, deleteTask} from "./mass.js";
 
let count = 0;
let checkCount = 0;
 function renderHigh(){
        hCheckboxList.innerHTML = ""
      for (let i of list) { if (i.priority === "high") {
        console.log(i.name);
        const highClone = highCheckDiv.cloneNode(true);
        highClone.classList.remove("highcheckbox-copy")
        highClone.classList.add("highcheckbox")
        highClone.id += count;
        highClone.children[0].id = i.id;
        if (i.status === "Done") {
        highClone.children[0].checked = true;
        }
        if (i.status === "In progress") {
            highClone.children[0].checked = false;
            }
        highClone.children[1].id += i.id;
        highClone.children[1].setAttribute("for", i.id);
        highClone.children[1].textContent = i.name;
        hcheckboxlist.appendChild(highClone);
        count++;
   
    }
    }
}
 
function renderLow(){
    lCheckboxList.innerHTML = ""
    for (let i of list) { if (i.priority === "low") {
      const lowClone = lowCheckDiv.cloneNode(true);
      count++;
      lowClone.classList.remove("lcheckbox-copy")
      lowClone.classList.add("lcheckbox")
      lowClone.id += count;
      lowClone.children[0].id = i.id;
      if (i.status === "Done") {
        lowClone.children[0].checked = true;
        }
        if (i.status === "In progress") {
            lowClone.children[0].checked = false;
            }
      lowClone.children[1].id += count;
      lowClone.children[1].setAttribute("for", i.id);    
      lowClone.for += count; 
      lowClone.children[1].textContent = i.name;
      lCheckboxList.appendChild(lowClone);    
  }
  }
}
function render(){
    renderHigh();
    renderLow();
}

 
function highPrioritySubmit(event){
event.preventDefault();
// if (high.value==="") {
//     return alert('Поле пустое');
// }

// const highClone = highCheckDiv.cloneNode(true);
// count++;
// highClone.classList.remove("highcheckbox-copy")
// highClone.classList.add("highcheckbox")
// highClone.id += count;
// highClone.children[0].id += count;
// highClone.children[1].id += count;
// highClone.children[1].setAttribute("for", "hcheckboxinput" + count);
// highClone.for += count; 
// highClone.children[1].textContent = high.value;
// hCheckboxList.appendChild(highClone);
hcheckboxAdd();

}
 
 
function hcheckboxAdd(){
    addTask(high.value, "ToDo", "high");
    showTask();
    render();
}
 
 
document.getElementById('add-high-button').addEventListener("click", highPrioritySubmit);
 


// Low priority


function lowPrioritySubmit(event){
    event.preventDefault();
    // if (low.value==="") {
    //     return alert('Поле пустое');
    // }
    
    // const lowClone = lowCheckDiv.cloneNode(true);
    // count++;
    // lowClone.classList.remove("lcheckbox-copy")
    // lowClone.classList.add("lcheckbox")
    // lowClone.id += count;
    // lowClone.children[0].id += count;
    // lowClone.children[1].id += count;
    // lowClone.children[1].setAttribute("for", "lcheckbox" + count);
    // lowClone.for += count; 
    // lowClone.children[1].textContent = low.value;
    // lowClone.children[1].name = low.value;
    // lCheckboxList.appendChild(lowClone);
    lcheckboxAdd();
    }
     
    function removecheck(event) {
        if (event.target.classList.contains('delete-symbols')){
            const findForDelete = list.findIndex(obj => obj.id === +event.target.previousElementSibling.previousElementSibling.id );
            const deleteIndex = list.splice(findForDelete, 1);
            console.log('Вы удалили задачу');
            console.log(deleteIndex, '\n');
            render();
        }
        }   

    function lcheckboxAdd(){
        addTask(low.value, "ToDo", "low");
        showTask();
        render();
    }
    function checkCheck() {
        let checkb=document.getElementsByClassName("hmaincheckbox");
        for (let i = 0; i < checkb.length; ++i) {
             if (checkb[i].checked === true) {
                changeStatus(checkb[i].nextElementSibling.textContent, "Done", "high")
             }
              
             if (checkb[i].checked === false) {
                changeStatus(checkb[i].nextElementSibling.textContent, "In progress", "high")
             }
            }
       
            let lowcheckb=document.getElementsByClassName("lmaincheckbox");
        for (let i = 0; i < lowcheckb.length; ++i) {
             
             if (lowcheckb[i].checked === true) {
                    changeStatus(lowcheckb[i].nextElementSibling.textContent, "Done", "low")
             }
             if (lowcheckb[i].checked === false) {
                    changeStatus(lowcheckb[i].nextElementSibling.textContent, "In progress", "low")
             }
         }
        showTask();
    }
    document.getElementById('add-low-button').addEventListener("click", lowPrioritySubmit);
    document.addEventListener("click", removecheck);
    document.getElementById('renderbutton').addEventListener("click", render);
    document.addEventListener("change", checkCheck)