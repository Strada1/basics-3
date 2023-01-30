 let i = 1;

// while (i < 20 ) {
// console.log(i)
// i = i + 1;
// }

// проверка условий после цикла

// let k = 1;

// do {
//  console.log(k);
//   k = k + 1;
// } while (k < 20);


// пробуем циклы с for

for (i = 1; i < 20; i++) {
console.log(i);
}

let k = 1;
for (; k < 7; k++) {
    console.log(k);
}

while (true) {
	console.log('начало');
	break;
  console.log('конец, который не случится');
}
console.log('конец');

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i); // 1, затем 3, 5, 7, 9
  }