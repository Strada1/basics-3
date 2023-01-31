// Обьекты

/*
const phoneBook = {
    'Arteom': 89374441808,
    'Pavel': 89273427443,
    'Anton': 89373450989
};


phoneBook.Alexandr = 89375553898;//added new contact to phoneBook, check how dot works

console.log(phoneBook.Alexandr);

phoneBook['Pavel'] = 89375644411;

delete phoneBook['Arteom'];

console.log(phoneBook);
*/

// THIS

const phoneBook = {
    list: {
        'Arteom': 89374441808,
        'Pavel': 89273427443,
        'Anton': 89373450989
    },
    log() {
        console.log(this.list)
    }
};

phoneBook.log();