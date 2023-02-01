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
  },
};

const fullName = 'Ivan Meshkov'
console.log(fullName in contactBook.list) //true