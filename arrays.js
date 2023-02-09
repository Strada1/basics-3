const toDoList = ['Найти', 'Заказать', 'Оплатить', 'Купить']

const taskCount = toDoList.length

toDoList[1] = 'Заменить'
const taskFirst = toDoList[1]
const taskLast = toDoList[toDoList.length - 1]
const shortList = toDoList.slice(0,2)
const middleList = toDoList.splice(1,4)

toDoList.push('Забрать заказ')
toDoList[1] = toDoList.pop()
toDoList.unshift('Выбрать товар')

console.log(taskCount)
console.log(taskFirst)
console.log(taskLast)
console.log(shortList)
console.log(middleList)

console.log(toDoList)