  const telefon = {
     'andrey': 89891707070,
     'maksim': 89286665399,
     'dmitriy': 8963788993,
     'lera': 89899334041
  };

  telefon['sergey'] = 89639865591;
  telefon['maksim'] = 89891112222;
 delete telefon['lera'];
  console.log(telefon);

 console.log(telefon.dmitriy);
 console.log(telefon['maksim']);



const information = {
    spisok: {
        'andrey': 1111,
        'nikolay': 44232,
        'artem': 35243
    },
    log() {
        console.log(this.spisok)
    }
}
information.log()