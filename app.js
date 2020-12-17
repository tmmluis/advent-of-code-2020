const fs = require('fs')
const day8One = require('./day-8/one')
const day8Two = require('./day-8/two')

const day9One = require('./day-9/one')
const day9Two = require('./day-9/two')

const day10One = require('./day-10/one')
const { two: day10Two } = require('./day-10/two')

const day15One = require('./day-15/one')
const day15Two = require('./day-15/two')

const day16One = require('./day-16/one')

const day17One = require('./day-17/one')
const day17Two = require('./day-17/two')


// DAY 8
fs.readFile('day-8/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    const solutionOne = day8One(input)
    console.log('Solution day 8 - Part One:', solutionOne)

    const solutionTwo = day8Two(input)
    console.log('Solution day 8 - Part two:', solutionTwo)
})

// DAY 9
fs.readFile('day-9/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    const solutionOne = day9One(input, 25)
    console.log('Solution day 9 - Part one:', solutionOne)

    const solutionTwo = day9Two(input, solutionOne)
    console.log('Solution day 9 - Part two:', solutionTwo)
})

// DAY 10
fs.readFile('day-10/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    const solutionOne = day10One(input)
    console.log('Solution day 10 - Part one:', solutionOne)

    const solutionTwo = day10Two(input)
    console.log('Solution day 10 - Part two:', solutionTwo)
})

// DAY 15
const input = [2, 15, 0, 9, 1, 20]
const solutionOne = day15One(input)
console.log('Solution day 15 - Part one:', solutionOne)

// const solutionTwo = day15Two(input)
// console.log('Solution day 15 - Part two:', solutionTwo)

// DAY 16
fs.readFile('day-16/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    const solutionOne = day16One(input)
    console.log('Solution day 16 - Part one:', solutionOne)
})

// DAY 17
fs.readFile('day-17/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    const solutionOne = day17One(input)
    console.log('Solution day 17 - Part one:', solutionOne)

    const solutionTwo = day17Two(input)
    console.log('Solution day 17 - Part two:', solutionTwo)
})