'use strict';

const phoneBook = {
    'Julia N': 89613195656,
    'Tatyana N': 89281716290,
    'Sergey N': 89281906008,
};

phoneBook['Svetlana P'] = 89281326780;

phoneBook['Svetlana P'] = 89281326788;
phoneBook['Oleg E'] = 89185090050;

delete phoneBook['Oleg E'];
console.log(phoneBook);

let user = {
    list: {
      name: 'Julia',
      city: 'Rostov-on-Don',  
      age: 33,
    },
    
    log() {
        console.log(this.list)
    }
};

user.log();
console.log(user.list.cat === undefined);
console.log('age' in user.list);
console.log('blabla' in user.list);

for (let key in user.list) {
    console.log(key);
}
const obj = {
    // 'name': 'Ciri',
};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    } 
    return true;
}

console.log(isEmpty(obj));


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };

  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
    // console.log(key);
    console.log(salaries[key]);
}
console.log(sum);
// console.log(salaries[key]);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu){
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
  }

  multiplyNumeric(menu);
  console.log(menu);