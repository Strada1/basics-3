// function checkAge(age) {
//   if (age < 18) {
//       return console.log("you are not allowed");
//   } else  {
//       return console.log("you are welcome");
//   }
// }
// checkAge(3)



// let gender = prompt("ваш пол", "женский или мужской");
// let wooman = "женский";
// let man = "мужской";

// if (gender == null) {
//     alert("вы не ввели ваш пол");

// } else if (gender === man || gender === wooman) {
//     if (gender === man) {
//         let firstName = prompt("Привет, дружище, как твоё имя");
//         if (firstName === null) {
//             alert("вы не ввели ваше имя");

//         } else if (firstName === "") {
//             alert("вы не ввели ваше имя")
//         } else {
//             let age = prompt(`сколько тебе лет ${firstName}`)
//             if (age === "") {
//                 alert("вы  не ввели свой возраст придётся попробовать все заново")
//             } else if (isNaN(age)) {
//                 alert(`чел ты использовал буквы? Серьёзно? ${firstName}, прости, но тебе придётся проходить всё заново`)
//             } else {
//                 if (age >= 18) {
//                     alert(`добро пожаловать ${firstName}!`)
//                 } else 
//                     alert(`прости ${firstName}, твои старания были напрасны...`)
//             }
//         }

//     } else {
//         let firstName = prompt("Здравствуйте, дувушка, как Ваше имя?");
//         if (firstName === null) {
//             alert("ты неправильно ввела своё имя, попробуй ещё раз");

//         } else if (firstName === "") {
//             alert("ты,наверное, забыла ввести своё имя")
//         } else {
//             let age = prompt(`сколько тебе лет ${firstName}?`)
//             if (age >= 18) {
//                 alert(`добро пожаловать ${firstName}!)`)
//             } else 
//                 alert(`прости ${firstName}, твои старания были напрасны...`)
//         }
//     }
// } else {
//     alert("неверно попробуйте еще раз");
// }

// function checkAge(age) {
//     if (age <= 18) {
//         console.log("you are not allowed");
//     } else {
//         console.log("you are welcome");
//     }
// }
// checkAge(11);



// let login = prompt("Введите ваш логин", "Админ");
// if (login === null || login === "") {
//     alert("Отменено");
// }else if (login === "Админ") {
//     let password = prompt("Введите ваш пароль");
//     if (password === null || password === "") {
//         alert("Отменено");
//     } else if (password === "Я главный") {
//         alert("Здравствуйте");
//     } else {
//         alert("Неверный пароль");
//     }
// }else {
//     alert("Я вас не знаю");
// };

// let browser = prompt("какой у тебя боаузер?", 'Edge');
// if (browser === "Edge") {
//     alert("You`ve got the Edge!");
// } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser ==="Opera" ) {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// };


// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0 :
//         alert("вы ввели число 0");
//         break;
//     case 1:
//         alert("Вы ввели число 1");
//         break;
//     case 2:
//     case 3:
//         alert("Вы ввели число 2, а может и 3");
//         break;
// };

// let i;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

function calc(operation, a, b) {
    if (operation === "add") {
        console.log(a + b);
    } else if (operation === "multi") {
        console.log(a * b);
    } else if (operation === "subtract") {
        console.log(a - b);
    } else {
        console.log("Something went wrong...")
    }
}
calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);

function calc(opetration, a, b) {
    switch(opetration) {
        case "add":
            console.log(a + b);
            break;
        case "multi":
            console.log(a * b);
            break;
        case "subtract":
            console.log(a - b);
            break;
        default:
            console.log("Something went wrong...");
    }
}
calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);


