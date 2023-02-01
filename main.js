const contactBook = { 

  list: {
    "Ivan Meshkov": 88992234578,
    "Dmitry Polivtsev": 88993746278,
    "Albert Akhtyamov": 88993746372
  },

  add(name, number) {
    this.list[name] = number;
  },

  delete(name) {
    delete this.list[name];
  },
};

  if (contactBook.list['Ivan Meshkov']) {
    console.log('Ivan is here');
  }


// contactBook.delete(fullName);
console.log(contactBook.list['Ivan Meshkov'])

// const phoneBook = {
// 	list: {
// 		"John": 123456789,
// 		"Jane Doe": 987654321,
// 		"Jim Smith": 111111111
// 	}
// };

// if (phoneBook.list['Jane Doe']) { // свойство существует
// 	console.log('Jane is here!'); // John is here!
// }

// if (phoneBook.list.Art) { // свойства не существует
// 	console.log('Art is here!');
// }

// console.log(phoneBook.list['Jane Doe']); // undefined