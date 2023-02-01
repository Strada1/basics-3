const persons = {
    list: {
        John: {
            firstName: 'John',
            gender: 'Man',
            age: 18,
            phone: 1111,
            address: 'pride street'
        },
        Harry: {
            firstName: 'Harry',
            gender: 'man',
            age: 19,
            phone: 2222,
            address: 'jump street'
        },
        Ennie: {
            firstName: 'Ennie',
            gender: 'woman',
            age: 22,
            phone: 3333,
            address: 'front street'
        }
    }
}

console.log(persons.list.Harry['firstName'] + ' - ' + persons.list.Harry['phone']);
console.log(persons.list.Harry['firstName'] + ' - ' + persons.list.Harry['gender']);


for(const allDate in persons.list.Harry) {
    console.log(allDate + ' ' + persons.list.Harry[allDate])
}
