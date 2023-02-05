const phoneBook = {
    list: {
    "Alexander" : 9998887,
    "Yaroslav Shishkin" : 9988776,
    "Ruslan Maroz" : 8877665,
    "Michael Korolev" : 1234567
    },
    add(name, number) { // добавили метод add с параметрами name и number
      this.list[name] = number; // добавили number в свойство [name] свойства list
    },
    delete(name, number) { // добавил удаление delete
    this.list[name] = number;
    }
  };
  
  phoneBook.add("Yaroslav Shishkin", 9988776);
  phoneBook.delete("Alexander", 9998887)

  console.log(phoneBook.list['Yaroslav Shishkin']); // 9988776
  console.log(phoneBook.list['Alexander']); // 9998887
  console.log(phoneBook.list.Big); // undefined
console.log("Big" in phoneBook.list); // false
console.log("Yaroslav Shishkin" in phoneBook.list); // true
for (const name in phoneBook.list) {
	console.log({name}-{number}); // Yaroslav Shishkin
	console.log(phoneBook.list[{name}-{number}] ); // 9988776
  }