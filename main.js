const contactBook = { 

  list: {
    "Ivan Meshkov": 88992234578,
    "Dmitry Polivtsev": 88993746278,
    "Albert Akhtyamov": 88993746372
  },

  add(name, number) {
    this.list[name] = number;
  }
};

contactBook.add('Darya Lyzhina', 88993748293);
console.log(contactBook.list['Darya Lyzhina'])

