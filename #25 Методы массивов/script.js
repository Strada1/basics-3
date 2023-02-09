const users = [
    { name: 'Peter', id: 1 },
    { name: 'Ann', id: 2 },
    { name: 'Ivan', id: 3 }
]

const findIdUser = (arr, userName) => {
    const user = (arr.find(item => item.name === userName))
    user
        ? console.log(user.name, user.id)
        : console.log('User is not found');
}

findIdUser(users, 'Peter');

// Задача
// дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion'].
// найдите первое слово длиной больше 7 символов и выведите его в консоль

const arr1 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
console.log(arr1.find(item => item.length > 7));



// Задача
// Дан массив чисел [1, 11, -2, 3, -10, 4].
// Создайте новый массив только из отрицательных чисел
// Выведите его в консоль

const arr2 = [1, 11, -2, 3, -10, 4];
let new_arr = arr2.filter(item => item < 0);
console.log(new_arr)