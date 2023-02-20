// const numbers = {
//   list: {
//     'yura': +79161111703,
//     'gena': +79781172864,
//     'vasya': +79182443753,
//     'andrey': +79171133403,
//   },
//   deletePerson(person) {
//     delete this.list[person]
//   },
//   addPerson(name, num) {
//     this.list[name] = num;
//   }
// }

// numbers.addPerson('jexa', 999999999) //динамическое добавление ключа и значения
// numbers.deletePerson('yura') //динамическое удаление имени
// numbers.list['yura'] = +79785144228; //обновляем значение ключа yura
// console.log(numbers.list);

// for(let a in numbers.list) {
//   console.log(numbers.list[a], a)
// }

// for(let a in numbers.list) {
//   console.log(`${a + -numbers.list[a]}`)
// }



// function createIncrementor() {
//   let count = 0;
//   return function() {
//     return ++count
//   }
// }

// const counterA = createIncrementor()
// const counterB = createIncrementor()

// console.log(counterA())
// console.log(counterA())
// console.log(counterA())
// console.log(counterB())
// console.log(counterB())

// function printNumbers(from, to) {
//   let stopInterval = setInterval(() => {
//     ++from
//     if(from === to) {
//       clearInterval(stopInterval)
//     }
//     console.log('a', from)
//   }, 1000);
// }

// printNumbers(0, 5)

// function generateString(name) {
//   return function(surname) {
//     return  `Привет ${surname} ${name}`
//   }
// }

// setInterval((generateString) => {
//   console.log(a('Демидов'))
// }, 2000);
// let a = generateString('Дмитрий')


// let stopInterval = setInterval(() => {
//   function generateName(name) {
//     return function(surname) {
//       return `Привет ${name} ${surname}`
//     }
//   }
  
//   let a = generateName('Юрий')
//   console.log(a('Демидов'))
// }, 1000);

