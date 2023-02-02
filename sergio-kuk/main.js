let i = 0;
while (i < 19) {
    console.log('итерация №', ++i);
}

i = 1;
do {
    console.log(i++);
} while (i < 20)

for (i = 1; i < 20; i++) {
    if (i % 2 == 0) continue;
    console.log('#',i);
}

