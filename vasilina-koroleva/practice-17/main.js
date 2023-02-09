const telegramContacts = {
    list: {
        'Danya': 89999999999,
        'Polly': 83333333333,
        'Oleg Petrovich': 89201902929,
    },
    add(name, number) {
        this.list[name] = number;
    },
    delete(name, number) {
        delete this.list[name];
    }
}

delete telegramContacts['Danya'];
telegramContacts['Krotik'] = 87776665544;
console.log(telegramContacts);
telegramContacts.delete('Polly');
telegramContacts.add('Mark', 123123123);

