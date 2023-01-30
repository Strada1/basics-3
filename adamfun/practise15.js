//Цикл с While

/*
let i = 1;
while (i < 20) {
    console.log(i)
    i = i + 1;
}
*/

//Цикл while с переносом условия в конец цикла

let i = 1;

do {
    console.log(i)
    i = i + 1;
} while ( i < 20);

//Цикл с For

/*
for ( let i = 1; i < 6; i++) {
    console.log(i);
}
*/

let k = 1;
for (; k < 6; k++) {
    console.log(k);
}

// Эксперементы с Break и Continue

let l = 1;

while ( l < 6) {
    console.log(l)
    l = l + 1;
    if( l === 4) break;
}

let j = 1

for (; j < 10; j++) {
    if (j % 2 == 0) continue;
    console.log(j);
}