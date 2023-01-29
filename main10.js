function calc ( operation, a, b ) {
    switch (operation){
    case 'add': 
        return a+b;
    case 'multi': 
        return a*b;
    case 'subtract': 
        return a - b;
    }
    }
    console.log (calc('subtract', 89, 16)) // 73
    console.log (calc('add', 15, 41)) // 56
    console.log (calc('multi', 25, 4)) // 100