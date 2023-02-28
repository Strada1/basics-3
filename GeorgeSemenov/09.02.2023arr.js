// Использовать методы массива чтобы добавлять и удалять задач
// Используйте методы массива чтобы вывести все задачи

let todoist=['oneTask','twoTask'];

console.log(todoist.pop());
todoist.push("thirdTask");
console.log(todoist);

console.log(todoist.shift());
todoist.unshift("ultra perdak")
console.log(todoist);

let i = 0;
for(item in todoist){
  console.log(`#${i} item = ${item}`);
  i++;
}