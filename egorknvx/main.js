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
                  alert('Вы сделали что-то не так');
                  break;
      }
}

calc('multi', 4, 4);