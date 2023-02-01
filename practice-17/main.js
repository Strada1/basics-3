'use strict';

const phoneBook = {
    list: {
    'Julia N': 89619148656,
    'Tatyana N': 89281716490,
    'Sergey N': 89281906008,
    },

    add(name, number) {
        this.list[name] = number;
    },

    del(name) {
        delete this.list[name];
    },

    change(name, number) {
        this.list[name] = number;
    }
};

phoneBook.add('Oleg E', 89185002090);
phoneBook.add('Cirilla', 80085565656);
phoneBook.change('Cirilla', 8000000000);
phoneBook.del('Sergey N');
console.log(phoneBook.list);

for (let key in phoneBook.list) {
    console.log(`${key} - ${phoneBook.list[key]}`)
}