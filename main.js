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

  if (contactBook.list['Ivan Meshkov']) {
    console.log('Ivan is here');
  }

console.log(contactBook.list['Ivan Meshkov'])