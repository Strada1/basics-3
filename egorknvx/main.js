function showVerticalMessage(str) {

   let maxLength = 7;

   if (!str) return str;

   if (str.startsWith('s')) {

      console.log(str.at(0).toUpperCase());
      for (let letter of str.slice(1, maxLength)) {

         console.log(letter);

      };

   } else {

      for (let letter of str.slice(0, maxLength)) {

         console.log(letter);

      };

   }
};

showVerticalMessage('qtradaqwe');