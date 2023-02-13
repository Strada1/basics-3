// Вывод чисел от 1 до 19 с помощью while
let k = 1;
while(k <= 19) {
	console.log(k)
	k++;
}

// Вывод чисел от 1 до 19 с помощью do ... while
let i = 1;
do {
	console.log(i);
	i++;
} while (i <= 19)

// Вывод чисел от 1 до 19 с помощью for
for (let j = 1; j <= 19; j++) {
	console.log(j);
}

// Простой пример с break
while (true) {
	console.log('начало');
	// break - выход из цикла
	break;
  console.log('конец, который не случится');
}
console.log('конец');

// Простой пример с continue
for (let i = 0; i < 10; i++) {
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;
  console.log(i); // 1, затем 3, 5, 7, 9
}
