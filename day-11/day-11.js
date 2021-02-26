const fs = require('fs')
const one = require('./one')

fs.readFile('./day-11/input.txt', (err, data) => {
  if (err) throw err
  const input = data.toString()

  console.log('Solution Part One:', one(input))
})