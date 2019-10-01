const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function() {

  it('should start with an empty paint stock', function(){
    const decorator = new Decorator();
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a tin of paint to paint stock', function(){
    const decorator = new Decorator();
    const tin1 = new Paint(10);
    decorator.addTin(tin1);
    const actual = decorator.stock.length;
    assert.deepStrictEqual(actual, 1)
    // const actual = decorator.stock;
    // assert.deepStrictEqual(actual, [dulux])
  });

  it('should be able to calculate total litres paint it has in stock', function(){
    const decorator = new Decorator();
    const tin1 = new Paint(10);
    decorator.addTin(tin1);
    const actual = decorator.calculateLitres();
    assert.deepStrictEqual(actual, 10)
  });

  it('should be able to calculate whether it has enough paint to paint a room', function(){
    const decorator = new Decorator();
    const tin1 = new Paint(10);
    decorator.addTin(tin1);
    const actual = decorator.enoughPaint();
    assert.deepStrictEqual(actual, false)
  });

  it('should be able to paint room if has enough paint in stock', function(){
    const decorator = new Decorator();
    const tin1 = new Paint(10);
    const tin2 = new Paint(10);
    const tin3 = new Paint(10);
    const tin4 = new Paint(10);
    const tin5 = new Paint(10);
    decorator.addTin(tin1, tin2, tin3, tin4, tin5);
    const actual = decorator.paintRoom();
    assert.deepStrictEqual(actual, true)
  });

});
