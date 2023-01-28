function calc(operation, a, b){
        switch(operation){
            case 'add':
                return a + b
                case 'multi':
                return a * b
                case 'subtract':
                return a - b
                default: 
                return 'net tankix znacehniy'
    }
    }
    
    console.log(calc('subtracta',  1, 2))
    
    function switchif2(number) {
        
    switch (number) {
        case 0:
      return'Вы ввели число 0';
      case 1:
        return 'Вы ввели число 1';
        case 2:
        case 3: return 'Вы ввели число 2, а может и 3';
        default: return 'Вы ввели число больше 3 или меньше нуля'
    }
    
    }
    
    console.log(switchif2(-13))
    
    
    
    switch (browser) {
        case 'Edge':
          alert( "You've got the Edge!" );
          break;
      
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
          alert( 'Okay we support these browsers too' );
          break;
      
        default:
          alert( 'We hope that this page looks ok!' );
      }

    