let a = 1 ;
while (a<20){
    console.log(a)
    a = a + 1 ;
}

let b = 1 ;

do {
    console.log(b)
    b = b + 1;
}while(b<=19)

let i = 0 ;

for (;i <= 20;){
    console.log(i)
    i = i + 2;
    console.log(i)
    
    i = i + 2;
    console.log(i)
    
    i = i + 2;
    console.log(i)
    break;

    
    
}

for (let j = 1; j < 10; j++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (j % 2 == 0) continue;
    console.log(j); // 1, затем 3, 5, 7, 9
  }

