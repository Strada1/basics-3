const phoneBook = {
    'Jane': 111111,
    'Kate': 222222,
    'Jess Smith': 333333
};
console.log(phoneBook); // { Jane: 111111, Kate: 222222, Jess: 333333 }

console.log(phoneBook.Jane); // 111111;

console.log(phoneBook['Jess Smith']); // 333333

phoneBook['Kate'] = 444444; // обновить запись
phoneBook['Lena'] = 999999;// добавить запись
delete phoneBook['Jane']; // удалить запись

const exBoyfriends = {
    list: {
        'Andrew': 'good guy',
        'Ilya': 'normal',
        'Sasha': 'shit happens'
    },
    log() {
        console.log(this.list)
    }
}
exBoyfriends.log();