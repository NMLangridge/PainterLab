const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {

  it('should have a number of litres of paint', function(){
    const paint = new Paint(10)
    const actual = paint.numberOfLitres();
    assert.deepStrictEqual(actual, 10)
  });

  it('should be able to check if it is empty', function(){
    const paint = new Paint(10)
    const actual = paint.checkIfEmpty();
    assert.deepStrictEqual(actual, true)
  });

  it('should be able to empty itself of paint', function(){
    const paint = new Paint(10)
    const actual = paint.emptyItself();
    assert.deepStrictEqual(actual, true)
  });

});
