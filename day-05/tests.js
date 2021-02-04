const assert = require('assert')
const one = require('./one')

describe('Day 5', () => {
    it("Highest seat ID is 820", () => {
        const input = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`
        assert.strictEqual(one(input), 820)
    })
})