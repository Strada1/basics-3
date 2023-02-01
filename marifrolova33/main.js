//добавили  методы add и del
const phoneBook = {
  list: {
    myNumber: 792158,
    mother: 793737,
    father: 792785,
    brother: 790033,
  },
  add(name, number) {
    this.list[name] = number;
  },
  del(name) {
    delete this.list[name];
  },
};

// добавляем с помощью метода add еще контакты
phoneBook.add("friend Lena", 79096);
phoneBook.add("boss", 7921217);
console.log(phoneBook.list);

//удаляем один контакт
phoneBook.del(["boss"]);
console.log(phoneBook.list);

//Выведите все имена и номера из книги в таком формате {имя} - {номер}
for (const contact in phoneBook.list) {
  console.log(contact + " - " + phoneBook.list[contact]);
}

// Проверка for in
console.log("myNumber" in phoneBook.list);
