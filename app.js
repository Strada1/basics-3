'use strict';

const telegramUserContacts = {
  list: {
    'Tom': 80002894575,
    'LordWood': 80002794575,
    'John': 80002814575,
    'Kirol': 80002894475,
  },

  addContact(name, number) {
    this[name] = number;
  },
  deleteContact(name) {
    delete this[name];
  },
};

telegramUserContacts.addContact('Hoor', 81102894475);
telegramUserContacts.deleteContact('John');

console.log(telegramUserContacts);
