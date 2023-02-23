// ---------------------------------
// ---------------------------------
let a = 'vasya';

console.log(a[0].toUpperCase() + a.slice(1));

function checkSpam(str) {
  let newCheckSpam = str.toLowerCase();

  if(newCheckSpam.includes('viagra') || newCheckSpam.includes('xxx')) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkSpam('buy ViAGRA now')
checkSpam('free xxxxx')
checkSpam("innocent rabbit")
// ---------------------------------
// ---------------------------------
function truncate(str, maxlength) {
  if( str.length > maxlength) {
    console.log(str.slice(0, maxlength - 1) + '...');
  } else {
    console.log(str);
  }
}

truncate("Всем привет!", 10)
// ---------------------------------
// ---------------------------------
function extractCurrencyValue(str) {
  if(str[0] === '$' || str[0] === '€'){
    console.log(str.slice(1));
  } else { 
    console.log('Enter correct value, please...');
  }
}

extractCurrencyValue('$222')