const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 6', () => {
  it('Part 1 - Sum should be 11', () => {
    const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

    assert.strictEqual(one(input), 11);
  })

  it('Part 2 - Sum should be 6', () => {
    const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

    assert.strictEqual(two(input), 6);
  })
})
