const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two whole floating-point numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should round down b\'s floating-point fractional number and return the sum', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should round down both a and b\'s floating-point fractional numbers and return the sum', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should round down a\'s floating-point fractional number and return the sum', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should round up b\'s floating-point fractional number and return the sum', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should round up both a and b\'s floating-point fractional numbers and return the sum', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should round up a\'s floating-point fractional number and return the sum', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should round down a and b\'s floating-point fractional numbers with trailing 9s and return the sum', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
