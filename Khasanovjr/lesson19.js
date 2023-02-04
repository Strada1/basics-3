const ToDo = { 
    list : {
        "make a bed" : "Done",
        "make a coffee" : "Done",
        "make a breakfast" : "In progress"
    },
    statuses :{
        "To do": 'active',
        "In progress": "active",
        "Done": "active"
    },

    addTask(name, status = "To do") {
        if(name in this.list){
            console.log("Такая задача уже есть в вашем списке")
        }
        else if (!(status in this.statuses)) { 
            console.log("Нельзя присвоить такой статус для задачи")
        }
        else {
            this.list[name] = status;
        };
    },
    changeStatus(name, status){
        if(!(name in this.list)){
            console.log("Задачи '" + name +"' еще нет в вашем списке")
        }
        else { 
            this.list[name] = status;            
        }
    },
    showList() {
        for (i in this.list) {
            console.log(i + " : " + this.list[i])
        }
    }
}