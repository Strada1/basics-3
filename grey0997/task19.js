const in_Progres = "In Progres";
const done = "Done";
const to_do = "To Do";



const list = {

  
    "Проснуться": done,
    
    "Сделать завтрак" : in_Progres,
    
    'Пойти в зал': to_do,
   

}



function showList() {
 

    for (key in list) {
        if (list[key] === done ) {
            
            console.log(`"${key}" : ${list[key]}`)
        }
    };

    for (key in list){
        if (list[key] === in_Progres ){

            console.log(`"${key}" : ${list[key]}`)
        }
    };

    for (key in list){
        if (list[key] === to_do ){

            console.log(`"${key}" : ${list[key]}`)
        }
    };
}

function addTask (name){
    if (!name){
        console.log ("Введите имя задачи")
    }else{
    list[name] = to_do;
    }
}

function deleteTask(name){
    if(name in list){
    delete list[name];
    }else {
        console.log ("Такой задачи и небыло !!")
    }
}

function changeStatus(name,status){
    for(key in list){
    list[name] = status;
    }
}


addTask("Сделать план на день")
addTask("Написать ToDo")
changeStatus("Написать ToDo",done)
deleteTask("Проснуться")

showList()
