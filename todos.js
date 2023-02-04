const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
    "write a post": "To Do",
}


const todo = {
    list,
    addTask(task){
        this.list[task] = "To Do"
    },
    deletTask(task){
        delete this.list[task]
    },
    changeTask(task, status){
        this.list[task] = status
    },
    showTask(){
        let a = 0
        let b = 0
        let c = 0

        for (let key in this.list){
            if (this.list[key] === "To Do" && a == 0 ){
                a++
                console.log(`\n${key}:\t ${this.list[key]}`)
            }
            else if (this.list[key] === "To Do" && a >= 1){

                console.log(`${key}:\t ${this.list[key]}`)
            }
        }
        for (let key in this.list){
            if (this.list[key] === "Done" && b == 0){
                b++
                console.log(`\n${key}:\t ${this.list[key]}`)
            }
            else if (this.list[key] === "Done" && b >= 1){
                console.log(`${key}:\t ${this.list[key]}`)

            }
        }
        for (let key in this.list){
            if (this.list[key] === "In Progress" && c == 0){
                c++
                console.log(`\n${key}:\t ${this.list[key]}`)

            }

            else if (this.list[key] === "In Progress" && c >= 1){

                console.log(`${key}:\t ${this.list[key]}`)
            }
        }

        if(a == 0) {
            console.log(`\n\'Nothink is \'To Do\'`)
        }
        if(b == 0) {
            console.log(`\n\'Nothink is \'Done\'`)
        }

        if(c == 0) {
            console.log(`\n\'Nothink is \'In Progress\'`)
        }

    }
}
todo.addTask("hello 5")
todo.addTask("hello 2")
todo.addTask("hello 1")
todo.addTask("hello 4")
todo.addTask("hello 3")
todo.addTask("it keck")
todo.addTask('have a walk');


todo.deletTask("write a post")


todo.changeTask("hello 2", "In Progress")
todo.changeTask("hello 1", "In Progress")
todo.changeTask("hello 4", "Done")
todo.changeTask("hello 3", "Done")
console.log()
todo.showTask()

