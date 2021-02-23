const fs = require('fs')
const one = require('./one')
const two = require('./two')

fs.readFile('./day-04/input.txt', (err, data) => {
  if (err) throw err
  const input = data.toString()

  console.log('Solution Part One:', one(input))
  console.log('Solution Part Two:', two(input))

})