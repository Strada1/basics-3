function calc(a,b,operation){
    switch(operation){ 
        case 'add':
            console.log( a + b );
        break;

        case 'multi':
            console.log( a * b );
        break;

        case 'substract':
            console.log( a - b );
        break;

    }
}
calc(1,2,'add');
calc(2, 7,'multi');
calc(8, 4,'substract');
