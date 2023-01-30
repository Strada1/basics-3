for (let i = 1; i < 10; i++) {
  console.log(i)
} 
// 1 2 3 4 5 6 7 8 9


// for (; i < 3;) {
//   console.log(i);
//   i = i + 1;
// }


for (let i = 1; i < 10; i++) { 
  if (i % 2 == 0) continue;
  console.log(i);
}
// 1 3 5 7 9