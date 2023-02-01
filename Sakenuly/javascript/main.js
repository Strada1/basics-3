const contacts = {
  list: {
      "Andryuha": 808,
      "Ali": 777
  }, 
  add(name, number) {
      contacts.list[name] = number;
  },
  delete(name) {
  delete contacts.list[name];
  },
};
for (const cname in contacts.list) {
console.log(cname + ' - ' + contacts.list[cname]);

} 
