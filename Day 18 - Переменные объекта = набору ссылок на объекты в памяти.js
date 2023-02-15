//! Переменная объекта - лишь набор ссылок на объекты в памяти

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // Изменено по ссылке из переменной admin

console.log(user.name); // 'Pete', изменения видны по ссылке из переменной user

// Это похоже на шкаф с name: 'John', с которому есть два ключа - user&admin
