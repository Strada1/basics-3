//! Вернуть строку с заглавным первым символом

function icFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(icFirst('привет')); // Привет

//! Проверить спам

function checkSpam(string) {
  if (string.toLowerCase().includes('viagra')) {
    return true;
  } else if (string.toLowerCase().includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam('innocent rabbit')); // false
console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true

//! Усечь строку

function truncate(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength-1) + '...';
  } else {
    return string;
  }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate("Всем привет!", 20))

//! Выделить число
function extractCurrencyValue(string) {
	return parseInt(string.slice(1));
}

console.log(extractCurrencyValue('$100'))