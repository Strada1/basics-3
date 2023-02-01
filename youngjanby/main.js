const persons = {
    list: {
        John: {
            name: 'John',
            gender: 'Man',
            age: 18,
            phone: 1111,
            address: 'pride street'
        },
        Harry: {
            name: 'Harry',
            gender: 'man',
            age: 12,
            phone: 2222,
            address: 'jump street'
        },
        Ennie: {
            name: 'Ennie',
            gender: 'woman',
            age: 22,
            phone: 3333,
            address: 'front street'
        }
    }
}

// console.log(persons.list.personTwo['name'] + ' - ' + persons.list.personTwo['phone']);
// console.log(persons.list.personTwo['name'] + ' - ' + persons.list.personTwo['gender']);


// console.log(persons.list.personTwo['name'] + ' - ' + persons.list.personTwo['phone'] + ' - ' + persons.list.personTwo['gender'] + ' - ' + persons.list.personTwo['age'] + ' - ' + persons.list.personTwo['address'])

//                  имя и телефон; потом имя и пол; имя + телефон + пол + возраст + адрес



//     if(persons.list.Ennie['age'] >= 18) {
//         console.log(persons.list.Ennie['name'] + ' - Welcome')
// } else {
//     console.log(persons.list.Ennie['name'] + ' - oops.. you are under 18')
// }
//     if(persons.list.Harry['age'] >= 18) {
//         console.log(persons.list.Harry['name'] + ' - Welcome')
// } else {
//     console.log(persons.list.Harry['name'] + ' - oops.. you are under 18')
// }
    
//     if(persons.list.John['age'] >= 18) {
//         console.log(persons.list.John['name'] + ' - Welcome')
// } else {
//     console.log(persons.list.John['name'] + ' - oops.. you are under 18')
// }


for (const name in persons.list) {
    if(persons.list[name].age >= 18) {
        console.log(name + ' - welcome')
    }else {
        console.log(name + ' - oops.. you are under 18')
    }
}