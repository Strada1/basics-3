function calc(operation, a, b) {
 switch(operation) {
   case 'add':
     const result = a + b;
     console.log(result);
     break;
   
   case 'multi':
     const result1 = a * b;
     console.log(result1);
     break;
     
   case 'subtract':
     const result2 =  a - b;
     console.log(result2);
     break;
   
   default:
     console.log('Вы что вообще ввели?')
 }
}
// первый косячный вариант 

 calc('add', 2, 3); //5
 calc('multi', 5, 5); //25
 calc('subtract', 100, 50);//50
 calc('abc');//Вы что вообще ввели?
 calc();


   

   