const phoneBook = {
    list: { 
      Gleb: {
        phoneNumber: 11111111111,
        age: 13,
        gender: "male"
      },
      Nikolay: {
        phoneNumber: 22222222222,
        age: 54,
        gender: "male"
      },
      Inokentiy: {
        phoneNumber: 33333333333,
        age: 21,
        gender: "female"
      }
    },
  
    showNameSpecInfo(name, info) {
      console.log(name, "-", this.list[name][info]);
    },
    showNameAllInfo(name) {
      console.log(name, "-", this.list[name]);
    },
    rangeAge(ageMin, ageMax) {
      for(const name in this.list) {
        if(this.list[name]["age"] >= ageMin && this.list[name]["age"] <= ageMax) {
          console.log(name);
        }
      }
    },
    rangeGenderMale(genderMale) {
      for(const name in this.list) {
        if(this.list[name]["gender"] === "male") {
          console.log("Вы мужчина:", [name]);
        }
      }
    }
  
  };
  
  phoneBook.showNameSpecInfo("Inokentiy", "phoneNumber");
  phoneBook.showNameSpecInfo("Gleb", "gender");
  phoneBook.showNameAllInfo("Nikolay");
  phoneBook.rangeAge(18,60);
  phoneBook.rangeGenderMale("male");
  