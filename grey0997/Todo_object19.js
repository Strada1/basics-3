const in_Progres = "In Progres";
const done = "Done";
const to_do = "To Do";



const list = {

  
    "Проснуться": done,
    
    "Сделать завтрак" : in_Progres,
    
    'Пойти в зал': to_do,
   

}



function showList() {
 
console.log (`${done}:`)
    for (key in list) {
        if (list[key] === done ) {
            
            console.log(`\t"${key}" `)
        }
    };

console.log(`${in_Progres}:`)
    
    for (key in list){
        if (list[key] === in_Progres ){

            console.log(`\t"${key}" `)
        }
    };

console.log(`${to_do}:`)
    for (key in list){
        if (list[key] === to_do ){

            console.log(`\t"${key}" `)
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
addTask("Выпить кофе")
changeStatus("Выпить кофе", in_Progres)
changeStatus("Написать ToDo",done)
changeStatus("Сделать план на день",done)
deleteTask("Проснуться")

showList()
