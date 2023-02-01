const contactBook = { 

  list: {
    "Ivan Meshkov": 88992234578,
    "Dmitry Polivtsev": 88993746278,
    "Albert Akhtyamov": 88993746372
  },

  add(name, number) {
    this.list[name] = number;
  },

  delete(name) {
   delete this.list[name];
  }
};

const fullName = 'Ivan Meshkov'

contactBook.delete(fullName);
console.log(contactBook.list['Ivan Meshkov'])

