// let a = 0;
// while (++a < 5) {
//   console.log(a); // от 1 до 4
// }
// console.log('\n');

// let i = 0;
// while (i++ < 5) {
//   console.log(i); // от 1 до 5
// }
// console.log('\n');

// for (let q = 0; q < 5; q++) {
//   console.log(q); // от 0 до 4 т.к.шаг выполняется после
//                   // проверки условия и тела цикла
// }
// console.log('\n');

// for (let w = 0; w < 5; ++w) {
//   console.log(w); // от 0 до 4 т.к.шаг выполняется после
//                   // проверки условия и тела цикла
// }
// console.log('\n');

// for (let p = 2; p <= 10; p++) {
//  if (p % 2 == 0) {
//   console.log(p);
//  }
// }
// console.log('\n');

// let z = 0;
// while (z < 3) {
//   console.log( `number ${z}!` );
//   z++;
// }
// console.log('\n');

let y = 15;

nextPrime:

for (let h = 2; h <= y; h++) {
  for (let j = 2; j < h; j++) {
    if (h % j == 0) continue nextPrime;
  }
  console.log(h);
}


let moreThan100 
do {
  moreThan100 = prompt('Please enter a number that is more than 100', 0);
} while (moreThan100 <= 100 && moreThan100);
