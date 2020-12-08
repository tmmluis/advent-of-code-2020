const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 8 - part one', () => {
  it("Should be equal to 5", () => {
    const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`
    assert.strictEqual(
      one(input), 5)
  })
})

describe('Day 8 - part two', () => {
  it('Should be equal to 8', () => {
    const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`
    assert.strictEqual(two(input), 8)
  })
})