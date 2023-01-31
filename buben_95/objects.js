const tgList = {
    list: {
    "Immaculated": 88888888888,
    "Duskbringer": 77777777777,
    "Kostynokit": 66666666666,
    "Bog Chervey": 5555555555
    },
    log(){
        console.log(this.list)
    }
  };
  
  console.log(tgList.Immaculated);
  console.log(tgList["Bog Chervey"]);
  
  tgList["Ks Barrrs"] = 4444444444;
  tgList["Duskbringer"] = 333333333;
  delete tgList["Kostynokit"];
  
  console.log(tgList.Duskbringer);
  console.log(tgList["Ks Barrrs"]);
  console.log(tgList["Kostynokit"]);
  
  tgList.log();