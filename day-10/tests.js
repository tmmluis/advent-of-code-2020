const assert = require('assert')
const one = require('./one')
const {two, countCombinations} = require('./two')

describe('Day 10', () => {
  it('Part one (a) should be equal to 35', () => {
    const input = `16
10
15
5
1
11
7
19
6
12
4`
    assert.strictEqual(one(input), 35)
  })
  it('Part one (b) should be equal to 220', () => {
    const input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`
    assert.strictEqual(one(input), 220)
  })
  it('Part two - countCombinations should be equal to 5', () => {
    const input = [0, 1, 3, 4, 6, 9]
    assert.strictEqual(countCombinations(input), 5)
  })
  it('Part two (a) should be equal to 8', () => {
    const input = `16
10
15
5
1
11
7
19
6
12
4`
    assert.strictEqual(two(input), 8)
  })
  it('Part two (b) should be equal to 19208', () => {
    const input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`
    assert.strictEqual(two(input), 19208)
  })
})