const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done"
}

const PRIORITY = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High"
}

const scheduler = {
    fullList: [
        { name: "drink water", status: "Done", priority: "High" },
        { name: "do Strada", status: "In Progress", priority: "High" },
        { name: "drink coffee", status: "In Progress", priority: "Low" },
        { name: "have breakfast", status: "To Do", priority: "Medium" },
        { name: "work", status: "To Do", priority: "High" },
        { name: "sleep", status: "To Do", priority: "Low" }],

    // Поиск индекса по имени
    findIndex(name) {
        return index = this.fullList.findIndex(task => task.name === name);
    },

    // Проверка на действительность статуса и приоритета
    checkStatus(status) {
        for (const value in STATUS) {
            if (status === STATUS[value]) {
                return true;
            }
        }
    },

    checkPriority(priority) {
        for (const value in PRIORITY) {
            if (priority === PRIORITY[value]) {
                return true;
            }
        }
    },

    // Добавляем задачу в конец массива fullList
    addTask(name, status = STATUS.TO_DO, priority = PRIORITY.LOW) {
        if (!this.checkStatus(status)) {
            return console.log(`Такого статуса нет! Задача ${name} не добавлена.`);
        }

        if (!this.checkPriority(priority)) {
            return console.log(`Такого приоритета нет! Задача ${name} не добавлена.`);
        }
        
        this.fullList.push({ name, status, priority });
        console.log (`Задача ${name} добавлена.`);
    },

    // Меняем статус или приоритет
    changeStatus(name, status) {
        if (!this.checkStatus(status)) {
            return console.log(`Такого статуса нет! У задачи ${name} статус не изменён.`);
        }

        this.findIndex(name);
        if (index !== -1) {
            this.fullList[index].status = status;
            console.log(`У задачи ${name} изменён статус.`);
        } else console.log(`Такой задачи нет! У задачи ${name} статус не изменён.`);
    },

    changePriority(name, priority) {
        if (!this.checkPriority(priority)) {
            return console.log(`Такого приоритета нет! У задачи ${name} приоритет не изменён.`);
        }

        this.findIndex(name);
        if (index !== -1) {
            this.fullList[index].priority = priority;
            console.log(`У задачи ${name} изменён приоритет.`);
        } else console.log(`Такой задачи нет! У задачи ${name} приоритет не изменён.`);
    },

    // Удаляем задачу из массива fullList (при одинаковых названиях удалится одна - первая)
    deleteTask(name) {
        this.findIndex(name);

        if (index !== -1) {
            this.fullList.splice(index, 1);
            console.log(`Задача ${name} удалена.`);
        } else console.log(`Такой задачи нет! Задача ${name} не удалена.`);
    },

    // Удаляем задачу из массива fullList (при одинаковых названиях удалятся все)
    deleteTasksWithSameNames(name) {
        this.findIndex(name);

        if (index !== -1) {
            this.fullList = this.fullList.filter(task => task.name !== name);
            console.log(`Задачи ${name} удалены.`);
        } else console.log("Такой задачи нет! Задачи ${name} не удалены.");
    },

    // Показать с сортировкой
    showListWithStatusSorting() {
        for (const value in STATUS) {
    
            console.log(STATUS[value] + ":");

            const subList = this.fullList.filter(task => task.status === STATUS[value]);
            
            if (subList.length === 0) {
                console.log("   -");
            } else subList.forEach(task => console.log("   " + task.name));

            console.log("");
        }
    },

    showListWithPrioritySorting() {
        for (const value in PRIORITY) {
            console.log(PRIORITY[value] + ":");

            const subList = this.fullList.filter(task => task.priority === PRIORITY[value]);
            
            if (subList.length === 0) {
                console.log("   -");
            } else subList.forEach(task => console.log("   " + task.name));

            console.log("");
        }
    }
}

//scheduler.addTask("visit parents", "aaa");
//scheduler.addTask("visit parents", "To Do", "aaa");
//scheduler.addTask("visit parents", "To Do", "High");

//scheduler.deleteTask("sleep");
//scheduler.deleteTask("AnewA");

//scheduler.changeStatus("drink water", "aaa");
//scheduler.changeStatus("drink water", "To Do");
//scheduler.changeStatus("aaa", "To Do");

//scheduler.changePriority("drink water", "aaa");
//scheduler.changePriority("drink water", "Low");
//scheduler.changePriority("aaa", "Low");

scheduler.showListWithStatusSorting();
//scheduler.showListWithPrioritySorting();