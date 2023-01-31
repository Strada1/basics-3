const telegramUserContacts = {
  'Tom': 80002894575,
  'LordWood': 80002794575,
  'John': 80002814575,
  'Kirol': 80002894475,

  checkValidation(value) {
    if (typeof value !== 'string') {
      return new Error('Incorrect type of data!');
    }

    if (value === '') {
      return new Error('Empty string is not allowed!');
    }
  },
  addNewContact(newContact, value) {
    this[newContact] = value;
  },
  showContact(contact) {
    if (this.checkValidation(contact)) {
      return null;
    }

    if (!this[contact]) {
      return null;
    }

    console.log(this[contact]);
  },
};

telegramUserContacts['John'] = 80002894335;
telegramUserContacts['Poll'] = 80002894311;
delete telegramUserContacts.Tom;

telegramUserContacts.showContact('');
telegramUserContacts.addNewContact('Derail', 80002774335);
