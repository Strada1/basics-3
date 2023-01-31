//objects

const telegramContacts = {
    'Danya': 89999999999,
    'Polly': 83333333333,
    'Oleg Petrovich': 89201902929
}

console.log(telegramContacts);
console.log(telegramContacts.Polly);
console.log(telegramContacts['Oleg Petrovich']);
delete telegramContacts['Danya'];
telegramContacts['Krotik'] = 87776665544;
console.log(telegramContacts);

//methods

const phoneBook = {
    list: {
        'john': 123,
        'jane': 456,
        'jim': 789
    },
    log() {
        console.log(this.list)
    }
};
phoneBook.log();