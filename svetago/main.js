let toDoList = ['приготовить завтрак', 'помыть посуду', 'сделать домашнее задание', 'приготовить обед', 'приготовить ужин'];
toDoList.splice(4, 0, 'почитать книгу', 'полить цветы');
toDoList.pop();
for (const task of toDoList) {
    console.log(task);
}