let k = 1;
while (k < 19) {
  console.log(k);
  k = k + 1;
}
// С циклом do...while
let i = 1;
do {
  console.log(i);
  i++;
} while (i < 19);
// for цикл
for (let l = 1; l < 19; l++) {
  console.log(l);
}
// break
let J = 1;
for (; J < 19; J++) {
  console.log(J);
  if (J == 10) break;
}
console.log(`Вы достигли придела, J = ${J}`);
// continue
let number = 1;
for (; number < 19; number++) {
  if (number == 5) continue;
  console.log(number);
}
let a = +prompt("Ведите, число, a=", " ");
let b = +prompt("Ведите число, b=", " ");

