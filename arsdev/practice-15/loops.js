let j = 1;

while (j < 20 ) {
console.log(j)
j = j + 1;
}

// проверка условий после цикла

let l = 1;

do {
 console.log(l);
  l =l + 1;
} while (l< 20);


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