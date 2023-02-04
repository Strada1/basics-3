const task = {

    list: {

        "create a new practice task": "In Progress", 
        "make a bed": "Done", 
        "write a post": "To Do",

    },

    changeStatus(task,progress){ 
        if (!(task in this.list)){
            console.log(task + " - этой задачи нет в списке!"); //если такой задачи нет в списке 
        }else if (task == ""){
            console.log("Введите задачу!"); //если не ввели задачу  
        }else if (task in this.list){ //если такая задача уже есть в списке 
            this.list[task] = progress;
        }
        
    },

    add(task,progress){ 
        if (task in this.list){ //если такая задача уже есть в списке 
            console.log(task + " - задача уже есть в списке!");
        }else if (task == ""){
            console.log("Введите задачу!"); //если не ввели задачу для добавления 
        }else if (!(task in this.list)){ //если такой задачи нет в списке 
            this.list[task] = progress;      
        }
    },

    deleteTask(task){
        if (task in this.list){ //если такая задача уже есть в списке 
            delete this.list[task];
        }else if (task == ""){
            console.log("Введите задачу!"); //если не ввели задачу для удаления
        }else if (!(task in this.list)){ //если такой задачи нет в списке 
            console.log(task + " - задачи нет в списке!");     
        }
    },

    showList(){
        let toDo = "";
        let inProgress = "";
        let Done = "";
        let res = "";
        for (const key in this.list) { //в key записываем имя свойства объекта

            let task = this.list[key];

            if(task == "To Do"){ // если статус задачи - To Do
                toDo += "\n" + "\t"  + key;
            }else if (task == "In Progress"){ // если статус задачи - In Progress
                inProgress += "\n" + "\t" + key;
            }else if (task == "Done"){ // если статус задачи - In Progress
                Done += "\n" + "\t"  + key;
            }
        }

            if (inProgress == "" ){ //если в списке отсутствуют задачи в статусе In Progress
                inProgress = "\n" + "\t" + "-";
            } else if (Done == "" ){  //если в списке отсутствуют задачи в статусе Done 
                Done = "\n" + "\t" + "-";
            }
           // res = `To do:  + ${toDo} +  In Progress: + ${inProgress}  + Done: + ${Done}`;//записываем результат в переменную res
            res = "To do:"  + toDo + "\n"+ "In Progress:" + inProgress + "\n"  + "Done:" + Done;//записываем результат в переменную res
            console.log(res);  
    }
};

task.changeStatus("create a new practice task","To Do");//функция для изменения статуса задачи
task.add("write a post","Done");//функция для добавления задачи
task.add("do homework","Done");
task.deleteTask("make a bed");//функция удаляет задачу 

task.showList(); //функция показывает список всех задач 
