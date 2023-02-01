console.log('What number of the rescue service would you like to know?');
let inputTurnService = 'Police';
const phoneBookRescuer = {
        "Fire": '001',
        "Police": '002',
        "Ambulance": '003',
        "Gas service": '004'
    }


if (inputTurnService === 'Fire') {
    console.log(phoneBookRescuer['Fire']);
} else if (inputTurnService === 'Police') {
    console.log(phoneBookRescuer['Police']);
} else if (inputTurnService === 'Ambulance') {
    console.log(phoneBookRescuer['Ambulance']);
} else if (inputTurnService === 'Gas Service') {
    console.log(phoneBookRescuer['Gas Service']);
} else {
    console.log('There is no such service in the database!');
}





