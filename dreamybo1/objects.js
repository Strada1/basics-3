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
    }
};

tgList.list["Мой номер"] = 12390909484150;
delete tgList.list["Реклама"]; //Можно использовать delete tgList["Реклама"], это другая нотация через скобки
tgList.log();

