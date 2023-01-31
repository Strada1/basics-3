const phoneNumber = {
    'Natasha': 1234567890,
    'Oleg': 0987654321, 
    'Sasha': 123456,
}

phoneNumber.Natasha = 111111;

phoneNumber.Oleg = 222222;

delete phoneNumber.Sasha;

console.log(phoneNumber);