function showVerticalMessage(string) {
	//! Проверка на строку
	if (typeof string === 'string') {
		//! Если 1-й символ === s, то с заглавной буквы вывести строку
		if (string.at(0).toLowerCase() === 's') {
			string = 'S' + string.slice(1)
		}
		for (let i = 0; i < string.length; i++) {
			//! Если строка > 7 символов - вывести только первые 7
			if (i < 7) {
				console.log(string[i]);
			}
		}
	} else {
		console.log('Это не строка :( ');
	}
}

showVerticalMessage('stradaISGOOD')
/* Output:
S
t
r
a
d
a
I
*/


showVerticalMessage('другая строчка')
/* Output:
д
р
у
г
а
я

*/

showVerticalMessage(NaN)
// Это не cтрока :(