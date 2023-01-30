// while
let b = 1;
while (b < 20) {
    console.log(b);
    b = b + 1;
}

//do while

let c = 1;
do {
    console.log(c);
    c = c + 1;
} while (c < 20);

//for

for (let i = 1; i < 4; i++) {
    console.log(i);
}

for (let i = 1; i < 20; i++) {
    console.log(i);
}

//break
while (true) {
    console.log('start');
    break;
    console.log('finish')
}
console.log('the end');
//continue
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}