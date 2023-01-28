function calc(operation, a, b) {
    switch (operation) 
        {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        }
    }
  
  console.log(calc('add', 2, 1));
  console.log(calc('multi', 60, 3));
  console.log(calc('subtract', 3, 2));
  
  