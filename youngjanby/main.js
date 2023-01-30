// цикл while
// let i = 1;

// while (i < 20) {
//     console.log(i);
//     i++;
// }

// цикл do while

// let i = 1;

// do {
//     console.log(i);
//     i++
// } while (i < 20);

//цикл for

// for (let i = 1; i < 20; i++) {
//     console.log(i)
// }

for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
    console.log(i); // 1, затем 3, 5, 7, 9
  }