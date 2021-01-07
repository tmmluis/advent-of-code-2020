const fs = require('fs')

const day1One = require('./day-1/one')
const day1Two = require('./day-1/two')

const day2One = require('./day-2/one')
const day2Two = require('./day-2/two')

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

const day19One = require('./day-19/one')

// DAY 1
fs.readFile('day-1/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    console.log('Solution day 1 - Part One:', day1One(input))
    console.log('Solution day 1 - Part Two:', day1Two(input))
})

// DAY 2
fs.readFile('day-2/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    console.log('Solution day 2 - Part One:', day2One(input))
    console.log('Solution day 2 - Part Two:', day2Two(input))
})

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

// DAY 19
fs.readFile('day-19/input.txt', (err, data) => {
    if (err) throw err
    const input = data.toString()

    console.log('Solution day 19 - Part one:', day19One(input))
})