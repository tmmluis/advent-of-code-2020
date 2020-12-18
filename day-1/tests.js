const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 1', () => {
  it("Part one should be equal to 514579", () => {
    const input = `1721
979
366
299
675
1456`
    assert.strictEqual(
      one(input), 514579)
  })
  // Part 2
  it("Part two should be equal to 241861950", () => {
    const input = `1721
979
366
299
675
1456`
    assert.strictEqual(
      two(input), 241861950)
  })
})
