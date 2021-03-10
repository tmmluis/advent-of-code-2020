const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 11', () => {
  it('Part 1 - should return 37 occupied seats', () => {
    const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`
    assert.strictEqual(one(input), 37)
  })
  it('Part 2 - should return 26 occupied seats', () => {
    const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`
    assert.strictEqual(two(input), 26)
  })
})