const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 19', () => {
  it("Part one should be equal to 2", () => {
    const input = `0: 4 1 5
1: 2 3 | 3 2
2: 4 4 | 5 5
3: 4 5 | 5 4
4: "a"
5: "b"

ababbb
bababa
abbbab
aaabbb
aaaabbb`
    assert.strictEqual(
      one(input), 2)
  })
  // Part 2
  
})
