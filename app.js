const fs = require('fs')
const day9One = require('./day-9/one')
const day9Two = require('./day-9/two')

// DAY 8



// DAY 9
fs.readFile('day-9/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()
    
    const solutionOne = day9One(data.toString(), 25)
    console.log('Solution day 9 - Part one:', solutionOne)
    
    const solutionTwo = day9Two(input, solutionOne)
    console.log('Solution day 9 - Part two:', solutionTwo)
})