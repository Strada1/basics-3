function do_while() {

      let i = 1;

      do {
            console.log(i);
            i = i + 1;
      } while (i < 20);

}

do_while();

function for_() {
      for (let i = 1; i < 20; i++) {
            console.log(i);
      }
}

for_();

function lines(line, number) {
      for (let i = 1; i < number; i++) {
            console.log(line);
      }
}

lines('text', 5);