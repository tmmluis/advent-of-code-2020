const assert = require('assert')
const one = require('./one')
const two = require('./two')

describe('Day 15', () => {
  it('Part one (a) should be equal to 1', () => {
    const input = [1,3,2]
    assert.strictEqual(one(input), 1)
  })
  it('Part one (b) should be equal to 10', () => {
    const input = [2,1,3]
    assert.strictEqual(one(input), 10)
  })
  it('Part one (c) should be equal to 27', () => {
    const input = [1,2,3]
    assert.strictEqual(one(input), 27)
  })
  it('Part one (d) should be equal to 78', () => {
    const input = [2,3,1]
    assert.strictEqual(one(input), 78)
  })
  it('Part one (e) should be equal to 438', () => {
    const input = [3,2,1]
    assert.strictEqual(one(input), 438)
  })
  it('Part one (f) should be equal to 1836', () => {
    const input = [3,1,2]
    assert.strictEqual(one(input), 1836)
  })

  // Part two
  
  it('Part two (a) 10th number spoken should be equal to 0', () => {
    const input = [0,3,6]
    assert.strictEqual(two(input, 10), 0)
  })
  it('Part two (b) should be equal to 10', () => {
    const input = [2,1,3]
    assert.strictEqual(two(input, 2020), 10)
  })
  it('Part two (c) should be equal to 175594', () => {
    const input = [0,3,6]
    assert.strictEqual(two(input), 175594)
  })
  // it('Part two (d) should be equal to 6895259', () => {
  //   const input = [2,3,1]
  //   assert.strictEqual(two(input), 6895259)
  // })
  // it('Part two (e) should be equal to 18', () => {
  //   const input = [3,2,1]
  //   assert.strictEqual(two(input), 18)
  // })
  // it('Part two (f) should be equal to 362', () => {
  //   const input = [3,1,2]
  //   assert.strictEqual(two(input), 362)
  // })
})