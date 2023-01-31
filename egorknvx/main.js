const phoneBook = {

      list: {
            'Egor': '+' + 11111111111,
            'Yana': '+' + 22211111111,
            'Artem D': '+' + 12312313,
            'Dasha': '+' + 44444444
      },

      log() {
            console.log(this.list);
      }

};

phoneBook.log();

phoneBook.list.Egor = 'change';
phoneBook.list['Artem D'] = 'change 2';
phoneBook.list.Polina = 71232144;
delete phoneBook.list.Dasha;

phoneBook.log();