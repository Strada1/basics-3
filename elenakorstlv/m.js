const listToDo = {
    list: {
    'Поставить брекеты': 'Done',
    'Оплатить Strada' : 'To do',
    'Пройти Strada' : 'In progress',
    'Найти работу Frontend-разработчиком' : 'To do',
    'Переехать из РФ' : 'To do',
    'Задача для удаления': 'To do'
    },
    // меняет статус задачи
        changeStatus(task, status) {
        this.list[task] = status
        },

    // добавляет новую задачу
        addTask(task, status) {
        this.list[task]= status
        },

    // удаляет задачу
        deleteTask(task, status) {
            delete this.list[task]; 
        },

    // показывает список всех задач
        showList(){
        console.log(this.list)
        },
};


//чтение
listToDo.showList();

//добавление
listToDo.addTask('Выиграть суд в ЕСПЧ', 'In progress');

listToDo.showList();

//изменение 
listToDo.changeStatus('Оплатить Strada', 'Done');

listToDo.showList();

//удаление
listToDo.deleteTask('Задача для удаления');

listToDo.showList();