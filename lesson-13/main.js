
// function calc(operation, a, b) {
//   let add = (a + b);
//   let subtract = (a - b);
//   let multi = (a * b);
//   if (operation==='add'){
//     console.log(add);
//   } else if (operation === 'subtract') {
//     console.log(subtract);
//   }  else if (operation === 'multi') {
//     console.log(multi);
//   }
// }
//  calc('add',8, 13);
//  calc('subtract',55, 2);
//  calc('multi', 8, 14);


function calc1(operation, a, b) {
let result;
  if (operation === 'add') {
    result = a + b;  
  } else if (operation === 'subtract') {
    result = a - b;    
  } else if (operation === 'multi') {
    result = a * b;
  } else {
    result = "wrong";
  }
  console.log(result);
}
 calc1('add',28, 33);
 calc1('subtract',55, 2);
 calc1('multi', 8, 14);
calc1('mult', 8, 14);


// console.log(calc1('add', 8, 8));
// console.log(calc1('subtract', 8, 8));
// console.log(calc1('multi', 8, 8));





// function calc(operation, a, b) {
//   let add = (a + b);
//   let subtract = (a - b);
//   let multi = (a * b);  

//   switch (operation) {
//     case 'add':
//       console.log(add);
//     break;

//     case 'subtract':
//       console.log(subtract);
//       break; 

//     case 'multi':
//       console.log(multi);
//       break;
//   }
// }
//  calc('add',18, 3);
//  calc('subtract',25, 2);
//  calc('multi', 8, 9);

