const assert = require('assert')
const one = require('./one')

describe('Day 03', () => {
    it('Should encounter 7 trees', () => {
       const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

        assert.strictEqual(one(input), 7)
    })
})