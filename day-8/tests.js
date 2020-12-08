const assert = require("assert")
const one = require("./one")

describe('Day 8 - One', () => {
  it("Accumulator should be equal to 5", () => {
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