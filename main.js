function calc(operation, a, b) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "multi") {
    return a - b;
  } else if (operation === "subtract") {
    return a * b;
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 2, 1));
console.log(calc("subtract", 1, 2));

const userAlim = {
  list: {
    name: "Alim",
    firstName: "Alim Stradov",
    userName: "Brag",
  },
  log() {
    console.log(this.list);
  },
};
userAlim.log();
userAlim.userName = "Alim zloi";
console.log(userAlim.name);
delete userAlim.firstName;
console.log(userAlim["firstName"]);
console.log(userAlim.userName);
