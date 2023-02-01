const tgList = {
    list : { "Моя" : 1239028244082,
     "Браузер" : 1239853682751,
     "Деда" : 1239194596039,
     "Баба" : 1239634389768,
     "Мама" : 1239090967832,
     "Папа" : 1239068958114,
     "Реклама" : 1238005553535
 },
     log(){
         console.log(this.list);
     },
     add(name, number){
        this.list[name]=number;
        
     },
     delete(name){
        delete this.list[name];
        
     }
 };
 
 tgList.list["Мой номер"] = 12390909484150; // добавил "Мой номер" в объект
 delete tgList.list["Реклама"]; //Удалил "Реклама" из объекта
 tgList.log(); //Выводим измененный объект
 tgList.add("example",99229922); //Добавляем контакт в объект
 tgList.delete("Мой номер"); //Удаляем контакт из объекта
tgList.log(); //Выводим измененный объект
 
for (const name in tgList.list){
    console.log(name, "-", tgList.list[name]);
}