let NewPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1 sec')
        resolve()
    }, 1000)
})

NewPromise.then(() => {
    console.log('Its Working')
}).then(() => {
    console.log('Its Working x2')
}).catch(() => {
    console.log('oops.. Error')
})