'use strict';

const telegramUserContacts = {
  list: {
    'Tom': 80002894575,
    'LordWood': 80002794575,
    'John': 80002814575,
    'Kirol': 80002894475,
  },

  addContact(name, number) {
    if (this.checkProperty(name)) {
      return null;
    }

    if (this.checkEmptyString(name)) {
      return null;
    }

    this.list[name] = number;
  },
  deleteContact(name) {
    if (!this.checkProperty(name)) {
      return null;
    }

    if (this.checkEmptyString(name)) {
      return null;
    }

    delete this.list[name];
  },
  checkProperty(prop) {
    return prop in this.list;
  },
  checkEmptyString(str) {
    return str === '';
  }
};

telegramUserContacts.addContact('Rick', 81102894475);
telegramUserContacts.deleteContact('John');

console.log(telegramUserContacts);

for (let user in telegramUserContacts.list) {
  console.log(`${user} - ${telegramUserContacts.list[user]}`);
}
