// try..catch позволяет ловить ошибки

try {
  // Сначала исполняем код тут
  // Если тут произошла ошибка, то мы переходим в начало catch
} catch (err) {
  // обработка ошибки, игнорируем остаток try и исполняем код тут
}

//! Пример try..catch без ошибок
try {
  console.log('Начало работы try');
  // код без ошибок, console.log() из catch() никогда не будет запущен
} catch (err) {
  console.log('Никогда не сработает');
}

//! Пример try..catch с ошибками
try {
  console.log('Начинаем работать..');
  //! try..catch работают только с корректным JS-кодом, незакрытые скобки все равно приведут к крашу программы
  console.log(lalala); // Несуществующая переменная
  console.log('Заканчиваем работать!'); // Этот код не исполнится, т.к. до него была ошибка и поток управления переходит в начало catch(err)
} catch (err) {
  console.log(err); // Выведем ошибку
  console.log(
    'Произошла ошибка, но ничего страшного, скрипт не остановит свою работу!'
  );
}

//! try..catch работает синхронно и нужно быть аккуратнее с setTimeout&setInterval
//! Пример законментирован, чтобы не остановить скрипт
// try {
// 	setTimeout(() => {console.log(blabla)}, 1000)
// } catch (err) {
// 	console.log('catch не поймает ошибку из try, т.к. блок try закончит свою работу после того, как запустит асинхронный процесс с ошибкой')
// }

setTimeout(() => {
  try {
    noSuchMethod();
  } catch (err) {
    console.log(
      'Ошибка поймана! setTimeout должен быть внешним для try..catch в этом случае'
    );
  }
}, 1000);

try {
  noSuchMethod;
} catch (err) {
	console.log('Имя ошибки: ' + err.name);
	console.log('Детали ошибки: ' + err.message);
	console.log('Текущий стек вызова: ' + err.stack); 
}

let json = '{"name": "nibezo", "age": 22}' // create json
let user = JSON.parse(json) // parse JSON data with JSON.parse

console.log(user.name)
console.log(user.age)

let incorrectJSON = '{ тут бредовый JSON, вызовет в JSON.parse ошибку и скрипт без try..catch ляжет }'

try {
	user = JSON.parse(incorrectJSON) // тут будет ошибка! 
} catch (err) {
	console.log('В данных произошла ошибка! Вот детали ошибки:')
	console.log(err.name)
	console.log(err.message)
}

//! Генерация своих ошибок - throw <объект ошибки>
let err1 = new Error('Ошибка 1')
let err2 = new SyntaxError('Ошибка 2')
let err3 = new ReferenceError('Ошибка 3')

let notFullData = '{ "age": 30}' // данные неполны, но технически верные
try {
	user = JSON.parse(notFullData);
	if (!user.name) {
		throw new SyntaxError("Нету имени, ошибка!")
	}
	console.log(user.name);
} catch (err) {
	console.log("JSON Error: "  + err.message) // Выведет: JSON Error: Нету имени, ошибка!
}


//! try..catch..finally - finally выполняется всегда
try {
  console.log( 'try' );
  BAD_CODE();
} catch (e) {
  console.log( 'catch' );
} finally {
  console.log( 'finally' );
}
