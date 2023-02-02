let addPerson = {
  list: {},
  addFunction() {
    let name = prompt("Введите ваше имя?");
    if (name) {
      addPerson.list[name];
    } else {
      alert("cocksucker?!");
      return;
    }
    let gender = prompt("Введите ваш пол?");
    if (gender == "man" || gender == "women") {
      addPerson.list[name] = gender;
    } else {
      alert("Fuck off cocksucker!!!");
      return;
    }
    let age = prompt("Введите ваш возраст?");
    if (!Number(age)) {
      alert("Age should be a number, cocksucker!");
    } else {
      addPerson.list[name] = age;
    }
    this.list[name] = {
      gender,
      age,
    };
  },
};
addPerson.addFunction();
// addPerson.addFunction();
// addPerson.addFunction();
console.log(addPerson.list);
