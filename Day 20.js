//! Если мы не юзаем this, то после копирования объекта функция 
//! будет все равно работать с объектом-родителем
const phoneBook = {
  list: {
    "John": 123456789,
    "Jane Doe": 987654321,
  },
  add(name, number) { 
    this.list[name] = number; // здесь this === phoneBook // phoneBook === объект перед точкой
  }
};

// Копируем книгу
const phoneBookCopy = Object.assign({}, phoneBook);

// Очищаем контакты
phoneBookCopy.list = {}

console.log(phoneBookCopy); // {list: {}, add: [Function: add]

// добавим новый контакт
phoneBookCopy.add('Art', '123');
// и увидим что он не добавился в phoneBookCopy
console.log(phoneBookCopy); // { list: {}, add: [Function: add] }
// он добавился в phoneBook
console.log(phoneBook); // { list: { John: 123456789, Art: '123' }, add: [Function: add] }
