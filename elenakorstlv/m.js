let user1 = {
    name: 'Lena',
    age: 28
};

let clone = {};

for(let key in user1){
    clone[key] = user1[key];
}

clone.name = "Elena";

console.log(user.name);
console.log(clone.name);



//Вложенное клонирование 
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, тот же объект
  
  // user и clone обладают общим свойством sizes
  user.sizes.width++;       // изменяем свойства в первом объекте
  alert(clone.sizes.width); // 51, видим результат в другом