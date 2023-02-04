const Todo = {
  list: {
    "Заправить кровать": "выполнено",
    "Покормить кота": "выполнено",
    "Завтрак": "выплнено",
    "Выпонить задание в Strada": "в процессе",
    "Отправить результат в GIT": "не выполнено",
  },

  // addTask('have a walk'); // добавляет новую задачу
  addTask(name1, name2) {
    this.list[name1] = name2;
  },

  // deleteTask('have a walk'); // удаляет задачу
  deleteTask(name1, name2) {
    delete this.list[name1];
  },

  //changeStatus("write a post", "Done") // меняет статус задачи
  changeStatus(name1, name2) {
    this.list[name1] = name2;
  },

  // showList(); // показывает список всех задач  
  showList(name1, name2) {
    for (const name2 in this.list)
      console.log(this.list)
  }
};

Todo.addTask("Отдохнуть", "не выполнено");
Todo.deleteTask("Заправить кровать");
Todo.changeStatus('Выполнить задание в Strada', 'выполнено');
Todo.showList();
