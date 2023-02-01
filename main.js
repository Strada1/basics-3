const obj = {
  list: {
      "Андрей": 8952342243,
      "Вася": 895235423,
      "Маша": 892463463
  },
  add(name, number) {
      this.list[name] = number
  },
  del(name) {
      delete this.list[name]
  }
}


obj.add("Артем", 89523552436)
// console.log(obj)


// obj.del("Андрей", 895235423)
// console.log(obj)


for(const a in obj.list) {
  // console.log(a)
  
console.log(a, "-", obj.list[a])
}


// Задача на learn.js #1
const user  = {}
user["name"] = "John"
user["surname"] = "Smith"
user["name"] = "Pete"
delete user["name"]
// console.log(user)





// Задача на learn.js #2
let nullobj = {
}
function isEmpty(obj){
  for(let a  in obj) {
          return false
  } 
   return true
}

// console.log(isEmpty(nullobj)) 





// Задача на learn.js #4

let salaries = { 
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumObj(obj) {
  let sum = 0;
  for(let a in obj) {
sum+= obj[a]

  }
  return sum
}

//   console.log(sumObj(salaries))

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for(let a in obj) {
      if(typeof obj[a] ==  "number") {
          obj[a] = obj[a] * 2
      }
  }
}

multiplyNumeric(menu);
console.log(menu)






const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
    add(name, number) { // добавили метод add с параметрами name и number
      this.list[name] = number; // добавили number в свойство [name] свойства list
    }
  };
  
  phoneBook.add("Sarah Johnson", 123123123);
  console.log(phoneBook.list['Sarah Johnson']); // 123123123