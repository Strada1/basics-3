function showVerticalMessage(str) {
    str[0] == 's' ? str = str[0].toUpperCase() + str.slice(1) : str;
    str.length > 7 ? str = str.slice(0, 7) : str;
    for (let char of str) {
      console.log(char);
    }
  }
  
  showVerticalMessage('strada');
  showVerticalMessage('stradalec');
  showVerticalMessage('ftradalec');