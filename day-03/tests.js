const assert = require('assert')
const one = require('./one')
const two = require('./two')

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

    it('Should encounter 336 trees', () => {
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
 
         assert.strictEqual(two(input), 336)
     })
})