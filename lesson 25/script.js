// let tasks = ['learn Java Script', 'learn Java Script better', 'learn React', 'find work']
// tasks.pop()
// console.log(tasks);
// tasks.push('find work')
// console.log(tasks);
// tasks.shift()
// console.log(tasks);
// tasks.unshift('learn Java Script')
// console.log(tasks);
// let newTasks1 = tasks.slice(1,3)
// console.log(tasks);
// console.log(newTasks1);
// let newTasks2 = tasks.splice(0, 1)
// console.log(tasks);
// console.log(newTasks2);
// tasks.splice(0, 0, 'learn Java Script')
// console.log(tasks);

const numbers1 = [6, 100, 45, 5, 56, 94, 72, 8, 123]

numbers1.forEach(number => {
 console.log((`Number is ${number}`))
})


const LENGTH = 7
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion']
const newAnimal = animals.find(animal => animal.length > LENGTH)
console.log(newAnimal);


const users = [
 { name: 'Ivan', age: 18 },
 { name: 'Petr', age: 25 },
 { name: 'Anna', age: 20 }
];
const girlAge = (users.find(item => item.name === 'Anna')).age
console.log(girlAge);


const numbers2 = [1, 11, -2, 3, -10, 4]
const negativNumber = numbers2.filter(number => number < 0) 
console.log(negativNumber);

const absoluteNumber = numbers2.map(number => 
 number > 0 ? number : number * -1
 )
 console.log(absoluteNumber);

 console.log(numbers2.sort((a,b) => b-a));


 [1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log(( a + " <> " + b ), (a > b ? 1 : -1));
  return a - b;
});

const cars = [
 {"name": "Chevrolet Camaro",
 "Engine capacity": "2.0 l",
 "Transmission": "four-wheel",
 "Engine power": "560 hp" },

 {"name": "Chevrolet Corvette",
 "Engine capacity": "2.0 l",
 "Transmission": "four-wheel",
 "Engine power": "560 hp" },
 
 {"name": "Audi R8",
 "Engine capacity": '5.2 l',
 "Transmission": 'four-wheel',
 "Engine power": '560 hp' }
];

const sortCars = cars.sort(function(item1,item2){
  if (item1.name > item2.name) return 1;
  if (item1.name == item2.name) return 0;
  if (item1.name < item2.name) return -1;
})
console.log(sortCars);
