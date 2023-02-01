const contactBook = { 

  name: {
    "Ivan Meshkov": 88992234578,
    "Dmitry Polivtsev": 88993746278,
    "Albert Akhtyamov": 88993746372
  }

};

const fullName = 'Ivan Meshkov' // Переменнаая - пользователь вводит имя
console.log (contactBook.name[fullName]) // Имя как ключ // получаем номер Ивана

// const phoneBook = {
// 	list: {
// 		"John": 123456789,
// 		"Jane Doe": 987654321,
// 		"Jim Smith": 111111111
// 	}
// };

// const fullName = 'Jane Doe'
// console.log(phoneBook.list[fullName]); // 987654321