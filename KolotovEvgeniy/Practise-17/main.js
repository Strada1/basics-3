const phoneBook = {
  list: {
    "I": 111111,
    "Wife": 222222,
    "Son Tim": 333333,
    "Mom": 444444,
    "Girl-Lili": 555555,
    "Girl-Lili (black)": 666666,
    "Irina 69": 696969
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name, number) {
    delete this.list[name];
  }
};

phoneBook.add("New Girl", 12345);
phoneBook.delete("Irina 69", 696969);

for (const name in phoneBook.list) {
  console.log(`${name} - ${phoneBook.list[name]}`)
};
//+