const todo = [
  { name: 'Заправить кровать', status: 'выполнено', priority: 'низкий' },
  { name: 'Покормить кота', status: 'выполнено', priority: 'высокий' },
  { name: 'Завтрак', status: 'выплнено', priority: 'средний' },
  { name: 'Выпонить задание в Strada', status: 'в процессе', priority: 'высокий' },
  { name: 'Отправить результат в GIT', status: 'не выполнено', priority: 'высокий' },
];

// добавляем новую задачу

const addTask = (task, status1, status2) => {
  const add = { name: task, status: status1, priority: status2 };
  todo.push(add)
}
// удалить задачу

const deleteTask = (ind, Del) => {
  todo.splice(ind, Del)
}

const changeStatus = (stat1, stat2) => {
  todo[stat1].status = stat2
}

addTask('Напоить кота', 'неполнено', 'высокий');
deleteTask(1, 2);
changeStatus(1, 'не выполнено');
console.log(todo); 
