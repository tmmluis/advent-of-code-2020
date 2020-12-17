const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 17', () => {
  describe('# Part 1', () => {
    it('After 1 cycle should have 11 cubes', () => {
      const input = `.#.
..#
###`
      assert.strictEqual(one(input, 1), 11)
    })
    it('After 2 cycles should have 21 cubes', () => {
      const input = `.#.
..#
###`
      assert.strictEqual(one(input, 2), 21)
    })
    it('After 3 cycles should have 38 cubes', () => {
      const input = `.#.
..#
###`
      assert.strictEqual(one(input, 3), 38)
    })
    it('After 6 cycles should have 112 cubes', () => {
      const input = `.#.
..#
###`
      assert.strictEqual(one(input, 6), 112)
    })
  })

  // Part 2
  describe('# Part 2', () => {
    it('After 1 cycle should have 29 cubes', () => {
      const input = `.#.
..#
###`
      assert.strictEqual(two(input, 1), 29)
    })
    it('After 6 cycle should have 848 cubes', () => {
      const input = `.#.
..#
###`
      assert.strictEqual(two(input, 6), 848)
    })
  })
})