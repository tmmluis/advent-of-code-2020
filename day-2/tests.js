const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 2', () => {
    it('Part one should find 2 valid passwords', () => {
        const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

        assert.strictEqual(one(input), 2)
    })

    it('Part two should find 1 valid password', () => {
        const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

        assert.strictEqual(two(input), 1)
    })
})