const phoneNumber = {
  list: {
    Slava: '+3 29 1234 4303',
    Mihas: '+57 29 324 3978',
    Hekit: '+45 53 1345 3634',
    Lenchik: '+67 295 6660 382',
    Crazik: '+7 964 85954868',
    Ilia: '+44 530 7810 34895',
  },
  log(name) {
    console.log(this.list[name])
  },
  add(name, number) {
    this.list[name] = number
  },
  delete(name) {
    delete this.list[name]
  },
}

delete phoneNumber['Crazik']
delete phoneNumber.Ilia

phoneNumber['Crazik'] = '+7 964 85954868'
console.log(phoneNumber.log('Lenchik'))
phoneNumber.add('Defar', '+374 29 654 789')
phoneNumber.delete('Ilia')
console.log(phoneNumber.list)
console.log('K' in phoneNumber.list)

for (const value in phoneNumber.list) {
  console.log(`${value} - ${phoneNumber.list[value]}`)
}

const a = 89
console.log(typeof a === 'number')
