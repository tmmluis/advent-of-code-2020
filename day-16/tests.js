const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 16', () => {
  it('Part one should be equal to 71', () => {
    const input = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`
    assert.strictEqual(one(input), 71)
  })
})