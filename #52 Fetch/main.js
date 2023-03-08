// Функция для вывода фактов о котиках с использованием метода .then

// function statusCheck(response) {

//     if (!response.ok) {
//         return Promise.reject(new Error('Ошибка : ' + response.ok))
//     }
//     if (response.status < 200 || response.status >= 300) {
//         return Promise.reject(new Error('Ошибка : ' + response.status))
//     }
    
//     return Promise.resolve(response.json())
// }

// function showData(data) {
//     console.log(data.fact);
// }

// function showError(error) {
//     console.log(`Ошибка : ${error.message}`);
// }

// setInterval(() => {
//     fetch('https://catfact.ninja/fact', {
//         method: 'GET',
//     })
//         .then( statusCheck ) // Проверка статуса ответа сервера
//         .then( showData ) // Вывод сообщения ответа
//         .catch( showError ) // Вывод сообщения в случае ошибки
// }, 3000);









// Функция с использованием asyns, await


// async function getData(url) {

//     let response = await fetch(url)
//     if (response.status !== 200) throw new Error('Ошибка в статусе');
//     if (!response.ok) throw new Error('Ошибка при получении данных');

//     let headers = await response.
//     console.log(headers);

//     let data = await response.json();
//     console.log(data);
// }

// setInterval(() => {
//     const request = new Request('https://catfact.ninja/fact')
//     getData(request)
// }, 4000);








// Функция получения данных о пользователе gitHub

document.addEventListener('submit', e => {
    e.preventDefault();
    let nick = e.target[0].value;

    getUser(nick)
        .then(user => console.log(user))

    e.target[0].value = '';
})

async function getUser(user) {
    let data = await fetch('https://api.github.com/users/' + user);
    let userData = await data.json();
    return userData;
}


