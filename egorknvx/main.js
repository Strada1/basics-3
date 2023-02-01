const phoneBook = {

      list: {

            'Egor': 1111,
            'Polina': 2222

      },

      add(name, number) {
            this.list[name] = number;
      },

      delete(name) {
            delete this.list[name];
      }

};
phoneBook.add('Yana', 3333);
phoneBook.delete('Polina');
console.log(phoneBook.list);

if ('Egor' in phoneBook.list) {
      console.log(phoneBook.list.Egor);
};

for (const name in phoneBook.list) {
      console.log(name + ': ' + phoneBook.list[name]);
};

const one = 1;
const two = 2;
const shortCut = {

      one,
      two

};
console.log(shortCut);