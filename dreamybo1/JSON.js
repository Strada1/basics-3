let user = {
    name: "Василий Иванович",
    age: 35
  };
let newUser = JSON.stringify(user);
console.log(newUser)
let nextUser = JSON.parse(newUser);
console.log(nextUser)