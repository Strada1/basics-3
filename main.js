/* Вывод в коносль массива из целых чисел 
const numbers = [-2, -1, 0, 1, 2, 3, 4];
numbers.forEach(number => console.log(`Number is ${number}`)); */

/* Поиск данных в массиве с помощью метода find
const numbersCopy = [-2, -1, 0, 1, 2, 3, 4];
const firstNegativeNumber = numbersCopy.find(number => number < 0);
console.log(firstNegativeNumber); */

/* Поиск пользователя в массиве по его имени
const users = ["Ivan", "Peter", "Alex"];
const user = users.find(user => user === "Alex");
console.log(user); */

/* Поиск пользователя по его имени внури массива, содержащего объекты 
const users = [
    { name: "Ivan", age: 45 },
    { name: "Aleksandr", age: 21 },
    { name: "Petr", age: 35 }
];

const user = users.find(user => user.name == "Aleksandr");
console.log(user); */

/* Поиск индекса элемента массива по его значению
const animals = ["cat", "dog", "elephant", "tiger"];
const animal = animals.indexOf("cat");
console.log(animal);*/

/* Проверка на наличеие элемента в массиве с помощью метода includes 
const animals = ["cat", "dog", "elephant", "tiger"];
const isTigerInludes = animals.includes("tiger");
console.log(isTigerInludes);*/

/* Поиск первого в массиве слова длинее 7 символов и вывод его в консоль
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const longestWord = animals.find(word => word.length > 7);
console.log(longestWord);*/

/*  Запись в новый массив слов длинее 5 символов с помощью метода filter
const animals = ["cat", "dog", "tiger", "lion", "elephant"];
const longWords = animals.filter(word => word.length > 5);
console.log(longWords);*/

/* Из массива целых чисел создать новый массив, где будут только отрицательные чилса и вывести его в консоль 
const numbers = [1, 11, -2, 3, -10, 4];
const negativeNumbers = numbers.filter(number => number < 0);
console.log(negativeNumbers);*/

/* Создание нового массива, содержащего слова из больших букв с помощью метода map 
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const upperCaseWords = animals.map(word => word.toUpperCase());
console.log(upperCaseWords);*/

/* Создание объекта из массива с помощью метода map 
const users = [
    { name: "Alex", age: 20 },
    { name: "Ivan", age: 25 },
    { name: "Petr", age: 34 },
]

userNames = users.map(user => user.name);
console.log(userNames);*/

/* Создание массива из абсолютных значений элементов другого массива 
const numbers = [1, 11, -2, 3, -10, 4];
absoluteNumbers = numbers.map(number => Math.abs(number));
console.log(absoluteNumbers);*/

/* Сортировка массива чисел по возрастанию с помощью метода sort 
const numbers = [1, 2, 11, 15, 22, 5, 4, 18, 3];
const sortNumbers = numbers.sort((a, b) => a - b);
console.log(sortNumbers);*/

/* Сортировка массива чисел по убыванию с помощью метода sort 
const numbers = [1, 11, -2, 3, -10, 4];
const sortNumbers = numbers.sort((a, b) => b - a);
console.log(sortNumbers);*/

/* Объединение массивов с помощью метода concat 
const animals1 = ["cat", "tiger", "cow"];
const animals2 = ["elephant", "turtle", "dog"];
const animalsSet = animals1.concat(animals2);
console.log(animalsSet);*/

/* Разделение строки на массив подстрок с помощью метода split
const string = "cat, dog, elephant, duck";
const animals = string.split(",");
console.log(animals);*/

/* Соединение массива подстрок в одну строку с помощью метода join
const animals = ['cat', 'dog', 'elephant'];
const string = animals.join('-');
console.log(string);*/

/* Перестановка элементов массива в обратном порядке с помощью метода reverse
const words = ["cat", "dog", "elephant"];
const reversedWords = words.reverse();
console.log(reversedWords);*/

/* Проверка является ли элемент массивом с помощью метода Array.isArray */
const animals = "cat dog elephant";
const isArray = Array.isArray(animals);
console.log(isArray);
