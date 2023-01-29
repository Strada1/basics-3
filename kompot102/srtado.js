function calc(operation, a, b ){
    switch(operation)
    {
        case 'add':
            console.log(a+b);
            break;
        case 'multi':
            console.log(a*b);
            break;   
        case 'subtract':
            console.log(a-b);
            break;   
    
    }
    }
    calc('add', 1,2)
    calc('multi', 1,2)
    calc('subtract', 3, 2)
   
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      }
