const phoneBook = {
  list: {
    "John": 123456789, 
    "Jane Doe": 987654321,
    "Jim Smith": 111111111,
    "Georgy": 27843874
  },
  add(name, number) {
    this.list[name] = number;
  }
};

phoneBook.add('Fergison', 20230202);  // этот потом удалить
console.log(phoneBook.list['Fergison']);

phoneBook.add('Trust', 223525);
console.log(phoneBook.list['Trust']);

delete phoneBook.list['Trust'];

console.log(phoneBook.list);

if (phoneBook.list.Fergison) {
  console.log('Fergison is here! Your number', phoneBook.list['Fergison']); // Fergison is here! Your number 20230202
}

console.log('Fergison' in phoneBook.list); // true

for (const name in phoneBook.list) { // выводит список имен Fergison - 20230202
  console.log(name + ' - ' + phoneBook.list[name]);
}

