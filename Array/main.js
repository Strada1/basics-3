const MAKE_STRADA = 'make Strada'
const MAKE_TRAINING = 'make training'
const GO_TO_SLEEP = 'go to sleep'

let missions = [MAKE_STRADA, MAKE_TRAINING, GO_TO_SLEEP]

const add = (name) => {
  missions.push(name)
}

const deleted = (sides) => {
  if (sides === 'start') {
    missions.shift()
  }
  if (sides === 'end') {
    missions.pop()
  }
}

const show = () => {
  for (const value of missions) {
    console.log(value)
  }
}

deleted('start')
show()
