const phoneBook = {
    list: {
      "Job": 1234,
      "Service": 9876,
      "Magasine Vostok": 1111,
      "Tigr": 464646,
  },
  add(name, number) {
    this.list[name] = number;
  }
};

  phoneBook.add("Sarah Johnson", 5555);
  console.log(phoneBook.list['Sarah Johnson']);
  