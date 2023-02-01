const phoneBook = {
 list: {
  "Anya": +745633556,
  "Manya": +7553533331,
  "Vanya": +722446654222
 },
 log() {
  console.log(this.list);
 }
};

phoneBook.list["Petya"] = +722233333
phoneBook.log()
phoneBook.list["Banya"] = +722233333
delete phoneBook.list["Petya"]
phoneBook.log()
