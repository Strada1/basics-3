const Todo = [
  { name: 'Заправить кровать', status: 'выполнено', priority: 'низкий' },
  { name: 'Покормить кота', status: 'выполнено', priority: 'высокий' },
  { name: 'Завтрак', status: 'выплнено', priority: 'средний' },
  { name: 'Выпонить задание в Strada', status: 'в процессе', priority: 'высокий' },
  { name: 'Отправить результат в GIT', status: 'не выполнено', priority: 'высокий' },
];

// добавляем новую задачу

Todo.splice(1, 0, { name: 'Напоить кота', status: 'выполнено', priority: 'высокий' }
),

  // изменям статус задачи

  Todo.splice(3, 1, { name: 'Завтрак', status: 'выплнено', priority: 'низкий' },
  ),

  // добавляем новую задачу в начало

  Todo.unshift({ name: 'Выспаться', status: 'не выполнено', priority: 'средний' });

// оставляем 2 задачи

let Tododel = Todo.slice(0, 2);
console.log(Tododel);

// удаляем последнюю задачу

const TodolastItem = Todo.pop();

// итерировать массив с помощью цикла for of

for (const task of Todo) {
  console.log(task);
}

console.log(Todo)

