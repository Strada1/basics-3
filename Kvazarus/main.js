list = ['задача 1', 'задача 2', 'задача 3', 'задача 4', 'задача 5'];
lastElem = list.pop();
console.log(list, lastElem);
list.push(lastElem);

firstElem = list.shift();
console.log(list, firstElem);
list.unshift(firstElem)

console.log(list);
deletedElements = list.splice(4, 10);
console.log(list, deletedElements);
list.splice(2, 0, deletedElements)
console.log(list);

for (const task of list) {
    if (typeof(task) === 'object') {
        for (const task1 of task) {
            console.log(task1);
        }
    } else {
        console.log(task);
    }
}