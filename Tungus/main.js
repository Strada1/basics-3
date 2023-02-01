const phoneBook={
  list: {
    "pchela": 22222222,
    "tungus": 11111111,
    "zionlionk": 33333333
  },
  add(name,number){
this.list[name]=number;
  },
  delete(name){
    delete this.list[name];
  },
};
phoneBook.delete("zionlionk");
phoneBook.add("yonas",44444444);
for(const name in phoneBook.list){
    console.log(name+" - "+phoneBook.list[name]);
    }

 

