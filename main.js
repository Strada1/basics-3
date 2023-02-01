const contactBook = { 

  name: {
    "Ivan Mehskov": 88992234578,
    "Dmitry Polivtsev": 88993746278,
    "Albert Akhtyamov": 88993746372
  },

};

let fullName = 'Ivan Meshkov' // Переменнаая - пользователь вводит имя
console.log (contactBook.name[fullName]) // Имя как ключ // получаем номер Ивана