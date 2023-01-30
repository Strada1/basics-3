
function calc(operation, a, b) {
    switch (operation) {
    case 'add':
       console.log(a +b);
    case 'multi': 
       console.log(a * b);
    case 'subtract':
       console.log(a - b);
    }
 }
 calc(`add`, 1, 2); //3
 calc(`multi`, 1, 2); //2
 calc(`subtract`, 3, 2); //1

 //changes 3