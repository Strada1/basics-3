//! this - это контекст, название объекта, к которому мы обращаемся

const phoneBook = {
  list: {
    John: 123456789,
    'Jane Doe': 987654321,
    'Jim Smith': 111111111,
  },
  add(name, phone) {
    // this.list[name] = phone == phoneBook.list[name] = phone
    this.list[name] = phone;
  },
  delete(name) {
		//! [] - без них не работает удаление
		//! this.list.name != this.list[name]
    delete this.list[name];
  },
};

// Show phoneBook.list
console.log(phoneBook.list);

// Add new contact
phoneBook.add('Sim', 222222222);
console.log(phoneBook.list);

// Delete contact using my own method
phoneBook.delete('John');
console.log(phoneBook.list);