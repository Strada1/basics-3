
function calc(operation, a, b) {
   switch (operation) {
      case 'add':
         alert(a + b);
         break;
      case 'multi':
         alert(a * b);
         break;
      case 'subtract':
         alert(a - b);
         break;
      default:
         alert('Вот-те на...');
   }

}