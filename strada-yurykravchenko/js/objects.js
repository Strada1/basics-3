const contacts = {
  "Дима": +79785144228,
  "Вася": 'друг',
  "Серега": +79783266453,
  "Юра": +79788493743,
  "Андрей": +'79a'+null,
  "Евгений": +79163457439
}

const contactsArrKeys = Object.keys(contacts); //сщдает массив из ключей объекта
const contactsArrValues = Object.values(contacts); // создает массив из значений объекта
const contactsArrKeyValues = Object.entries(contacts)
console.log(contactsArrKeys)
console.log(contactsArrValues)
console.log(contactsArrKeyValues)

contactsArrKeyValues.forEach((item, index) => {
  console.log(item, index)                          //перебераю массив и вывожу ключ-значение и индекс элемента массива
})

contacts.Геннадий = +79687457324      //добавляет элемент
delete contacts.Дима                  //удяляет элемент
contacts.Юра = +79161111703           //обновляет элемент

console.log(contacts)

const contactsWork = {
  list: {
    "Дима": +79785144228,
    "Вася": +79785142341,
    "Серега": +79783266453,
    "Юра": +79788493743,
    "Андрей": +79789762363,
    "Евгений": +79163457439
  },
  log() {
    console.log(this.list)
  }
}

contactsWork.log();