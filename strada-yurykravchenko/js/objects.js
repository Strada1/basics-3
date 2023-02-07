// // const contacts = {
// //   "Дима": +79785144228,
// //   "Вася": 'друг',
// //   "Серега": +79783266453,
// //   "Юра": +79788493743,
// //   "Андрей": +'79a'+null,
// //   "Евгений": +79163457439
// // }

// // const contactsArrKeys = Object.keys(contacts); //сщдает массив из ключей объекта
// // const contactsArrValues = Object.values(contacts); // создает массив из значений объекта
// // const contactsArrKeyValues = Object.entries(contacts)
// // console.log(contactsArrKeys)
// // console.log(contactsArrValues)
// // console.log(contactsArrKeyValues)

// // contactsArrKeyValues.forEach((item, index) => {
// //   console.log(item, index)                          //перебераю массив и вывожу ключ-значение и индекс элемента массива
// // })

// // contacts.Геннадий = +79687457324      //добавляет элемент
// // delete contacts.Дима                  //удяляет элемент
// // contacts.Юра = +79161111703           //обновляет элемент

// // console.log(contacts)

// // const contactsWork = {
// //   list: {
// //     "Дима": +79785144228,
// //     "Вася": +79785142341,
// //     "Серега": +79783266453,
// //     "Юра": +79788493743,
// //     "Андрей": +79789762363,
// //     "Евгений": +79163457439
// //   },
// //   log() {
// //     console.log(this.list)
// //   }
// // }

// // contactsWork.log();


// // const contactsWorks = {
// //   list: {
// //     "Дима": +79785144228,
// //     "Вася": +79785142341,
// //     "Серега": +79783266453,
// //     "Юра": +79788493743,
// //     "Андрей": +79789762363,
// //     "Евгений": +79163457439
// //   },

// //   add(name, number) {
// //     this.list[name] = number;
// //   }
// // }
// // contactsWorks.add("Антон", 4873534534);
// // console.log(contactsWorks);


// // const contactsWorks2 = {
// //   list: {
// //     "Дима": +79785144228,
// //     "Вася": +79785142341,
// //     "Серега": +79783266453,
// //     "Юра": +79788493743,
// //     "Андрей": +79789762363,
// //     "Евгений": +79163457439
// //   },
// //   delete(name) {
// //     this.list[name];
// //   }
// // }

// // contactsWorks2.delete('Евгений')
// // console.log(contactsWorks2)

// // const phoneBook = {
// // 	list: {
// // 		"John": 123456789,
// // 		"Jane Doe": 987654321,
// // 		"Jim Smith": 111111111
// // 	}
// // };


// // delete phoneBook.list['Jane Doe'];
// // console.log('John' in phoneBook.list)

// // const phoneBook = {
// // 	list: {
// // 		"John": 123456789,
// // 		"Jane Doe": 987654321,
// // 		"Jim Smith": 111111111
// // 	}
// // };

// // for(const name in phoneBook.list) {
// //   // console.log(name)
// //   // console.log(name + -phoneBook.list[name])
// // }

// // const yura = 4367834769835;
// // const vasya = 'Vasya';
// // const list = {
// //   yura,
// //   vasya
// // };

// // console.log(list)

// const contacts = {
//   list: {
//   "Дима": +79785144228,
//   "Вася": 'друг',
//   "Серега": +79783266453,
//   "Юра": +79788493743,
//   "Андрей": +'79a'+null,
//   "Евгений": +79163457439
//   },
//   add(name, number) {
//     this.list[name] = number;
//   }
// }
// contacts.add('Генри', 48376984376)
// console.log(contacts)

// // // console.log('Дима' in contacts)
// // for(const name in contacts) {
// //   console.log(name + -contacts[name])
// // }


// const listTasks = {
//   'сходить в магазин': ': требует выполнения',
//   'купить молока': ': требует выполнения',
//   'позавтракать': ': требует выполнения',
// };

// const listStatus = {
//   'сходить в магазин': ': в процессе',
//   'купить молока': ': в процессе',
//   'позавтракать': ': в процессе',
// };

// function showTasks() {
//   alert('Ваши задачи на сегодняшний день:');
//   for(const name in listTasks) {
//     alert(name + listTasks[name])
//   }
// }
// showTasks()



// function selectTask() {
//   const checkTasks = prompt('Какую задачу вы хотите выполнить?')
//   if(checkTasks in listTasks) {
//     alert('Отлично приступайте')
//     changeStatus(checkTasks, )
//   }else {
//     alert('Такой задачи не существует')
//   }
// }
// selectTask();



// function checkTask() {
//     const sulution = prompt('Хотите добавить эту задачу в ваш список задач?')
//   if(sulution === 'да') {
//     // selectTask()
//     // listTasks[checkTasks] = 'в процессе';
//     alert('Ваш список дел обновился');
//     showList()
//   } else {
//     alert('Тогда можете приступить к выполнению текущих задач')
//   }
// }
// // checkTask()

// // function showList() {
// //   for(const name2 in listTasks ){
// //     alert(name2)
// //   }
// // }


// function changeStatus(key, value) {
  
// }


// // function addRecord(key, value) { // функция принимает ключ и значение
// // 	this.list[key] = value; // у объекта, который вызвал функцию, в свойстве list свойству [key] присваиваем value 
// // }

// // const phoneBook = {
// //   list: {
// //     "John": 123456789,
// //     "Jane Doe": 987654321,
// //   },
// //   addRecord
// // };

// // phoneBook.addRecord('utyhb', 928392382)

// // console.log(phoneBook.list)




