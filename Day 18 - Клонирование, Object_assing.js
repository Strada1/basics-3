let user = {
  name: 'John',
  age: 36,
};

let clone = {}; // New object

for (let key in user) {
  // clone['John'] = user['John']
  // Добавляем в clone новый ключ 'John' со значением user['John']
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = 'Pete'; // изменим в нём данные

console.log(user.name); // все ещё John в первоначальном объекте

//! Но можно быстрее с помощью Object.assign({}, <имя объекта>)

let newClone = Object.assign({}, user);
console.log(newClone); // { name: 'John', age: 36 }
