const phoneBook = {
    list: {
        'Number1': 1111,
        'Number2': 2222,
        'Number3': 3333,
    },
    add(name, number) {
        phoneBook.list[name] = number
    }
}

phoneBook.add('Number4', 4444)
for(const name in phoneBook.list) {
    console.log(name + ' - ' + phoneBook.list[name])  // name - это ключ myPhoneBook.list[name]  - это означает, что ты просишь js в объекте myPhoneBook найти запись с ключом list, в значении которого объект, и у него по ключу [name] получить значение
}





