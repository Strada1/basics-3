// Объекты - пары ключ: значение, ключ может быть только строкой, значение - любое

const phoneBook = {
  "John": 123456789, // ключ John со значением 123456789
  "Jane Doe": 987654321, // ключ Jane Doe со значением 987654321
  "Jim Smith": 111111111 // ключ Jim Smith со значением 111111111
};

console.log(phoneBook); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }

// Виды нотаций - обращений к значениям
console.log(phoneBook.John)
console.log(phoneBook["John"])

// В нотации с точкой пробелы запрещены
console.log(phoneBook["Jim Smith"]) // phoneBook.Jim Smith -> Нельзя

//! Операции с объектами

phoneBook["Katie Johnson"] = 89497301656 // Add
phoneBook["Jane Doe"] = 222222222 // Update
delete phoneBook["Jim Smith"] // Delete
console.log(phoneBook)