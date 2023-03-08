// const delay = ms => {
//     return new Promise (r => setTimeout(() => r(), ms))
// }

// // delay(2000).then(() => console.log('2 sec'));


// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// // function fetchTodos() {
// //     console.log('fetch todo started...')
// //     return delay(2000).then(() => {
// //         return fetch(url)
// //     }).then(response => response.json())
// // }

// // fetchTodos()
// //     .then(data => {
// //         console.log('Data: ', data)
// //     })
// //     .catch(e => console.error(e))

// async function fetchAsyncTodos() {
//     console.log('fetch todo started...')
//     try {
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data: ', data)
//     } catch(e) {
//         console.error(e)
//     }
// }

// fetchAsyncTodos();


    setInterval(() => {
        fetchCourseBIT('https://api.coindesk.com/v1/bpi/currentprice.json')
    }, 2000)


async function fetchCourseBIT(url) {
        let data = await fetch(url);
        let json = await data.json()
        let currentpriceBTC = json.bpi.USD.rate;

        if(data.ok) {
        console.log(`Course BTC: ${currentpriceBTC}`)
        } else {
            console.log(`Ошибка HTTP: ${data.status}`)
        }
}