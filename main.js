const phoneBook = {
  list: {
    'John': 123456789,
    'Jane Doe': 987654321,
    'Jim Smith': 123459876
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name) {
   delete this.list[name];
  }
};
phoneBook.delete('John');
phoneBook.add('Sarah Johnson', 123123123);
phoneBook.add('Matthew McConaughey', 89089088888);
console.log(phoneBook.list);