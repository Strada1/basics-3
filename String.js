function showVerticalMessage(word) {
    const CORRECT_LENGTH = word.slice(0,7);
      word = CORRECT_LENGTH;
     
      if ( word.charAt(0) === word.charAt(0).toLowerCase ); {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
     
        for (let char of word) {
          console.log('// ' + char);
        }
      };
     
    showVerticalMessage('stradazione');