const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 9', () => {
  it('Part one should be equal to 127', () => {
    const preambleSize = 5
    const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`
    assert.strictEqual(one(input, preambleSize), 127)
  })
  it('Part two should be equal to 62', () => {
    const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`
    assert.strictEqual(two(input, 127), 62)
  })
})