const pizza = {
  list: {
    iphone: 1123332,
    name: "DODO/pizza",
    adress: "lenina-43",
  },

  userPizza(userName, number) {
    this.list[userName] = number;
  },
  log() {
    delete this.list["iphone"];
  },
  aitem(audio) {
    console.log(audio);
  },
};

if (pizza.list.name) {
  console.log("ДА,свойство name существует");
}
if (pizza.list.iphone) {
  console.log("Да свoйство iphone есть");
}
console.log("name" in pizza.list);
pizza.userPizza("Aleks", 22333333);
console.log(pizza.list["Aleks"]);
console.log(pizza.log());
console.log(pizza.list["name"]);
pizza.aitem("Helloy, brather");
for (const key in pizza.list) {
  console.log(key);
  console.log(pizza.list[key]);
}
