let tasks = ['learn Java Script', 'learn Java Script better', 'learn React', 'find work']
tasks.pop()
console.log(tasks);
tasks.push('find work')
console.log(tasks);
tasks.shift()
console.log(tasks);
tasks.unshift('learn Java Script')
console.log(tasks);
let newTasks1 = tasks.slice(1,3)
console.log(tasks);
console.log(newTasks1);
let newTasks2 = tasks.splice(0, 1)
console.log(tasks);
console.log(newTasks2);
tasks.splice(0, 0, 'learn Java Script')
console.log(tasks);
