const myCat = {
  age: 3,
  name: "Misa",
  catColor: "grey",
  owner: "Marina",
  mainFeature: "naughty"
};
myCat.catColor = "grey and yellow";
console.log("Hello, " + myCat.name + "!");

////////////////////////
//tasks from a lesson
const phoneBook = {
  "Mari Fr": 7911783,	  age: 3,
  "Lena More": 79091,	  name: "Misa",
  Misa: 792158,	  "cat color": "grey",
  Homebank: 100000,	  owner: "Marina",
};

myCat["cat color"] = "grey and yellow";
//вызываем сам обЪект phoneBook	console.log("Hello, " + myCat.name + "!");
console.log(phoneBook);	
//получить доступ к Misa	
console.log(phoneBook.Misa);	

// строки в квадратных скобках	
console.log(phoneBook["Lena More"]);	
console.log(phoneBook["Mari Fr"]);	

//добавить запись	
phoneBook.Mother = 8937379;	
console.log(phoneBook);	

//обновить запись	
phoneBook["Lena More"] = "lpraud";	
console.log(phoneBook);	

//удалить запись	
delete phoneBook["Homebank"];	
console.log(phoneBook);	

// Методы	
const anotherPhoneBook = {	
  list: {	
    "Mari Fr": 7911783,	
    "Lena More": 79091,	
    Misa: 792158,	
    Homebank: 100000,	
  },	
  log() {	
    console.log(this.list); //ключевое слово - для вывода информации, которая есть в самом объекте	
  },	
};	

anotherPhoneBook.log();