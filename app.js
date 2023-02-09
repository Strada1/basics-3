const tasks = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];
tasks.push('кодить')
tasks.shift()
tasks.unshift('почитать')
tasks.pop()
const tasks2 = tasks.slice(1,3)
tasks.splice(1, 2, 'Почитать про git')
for (const task of tasks) {
    console.log(task);
  }