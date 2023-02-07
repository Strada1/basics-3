const showVerticalMessage = (str) => {
  let arr = str.split('')
  if(str.startsWith('s') ||str.startsWith('S')) {
      console.log('S')
  }
  for(let i =1; i < 6; i ++) {
      if(arr[i] === undefined) {
      }else {
          console.log(arr[i])
      }
  }
}


showVerticalMessage('Strada');
