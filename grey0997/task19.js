const in_Progres = "In Progres";
const done = "Done";
const to_do = "To Do";



const list = {

    
    "wake up": done,
    "Make a breakfast" : in_Progres,
    'go to the hall': to_do,
   

}

function showList(){
    for (let name in list){
        console.log (`${list[name]}:`);
        console.log (name);

    }

}

function addTask (name,status){
    list[name] = status;
}

function deleteTask(name){
    delete list[name];
}

function changeStatus(name,status){
    list[name] = status;
}

addTask("aaaaaa",to_do)
deleteTask("aaaaaa")
addTask("иииии",done)
changeStatus("иииии", to_do)
showList()
