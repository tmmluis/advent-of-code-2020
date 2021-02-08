const assert = require('assert');
const one = require('./one');

describe('Day 6', () => {
  it('Sum should be 11', () => {
    const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

    assert.strictEqual(one(input), 11);
  });
});
