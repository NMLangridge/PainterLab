const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {

  it('should have an area in square metres', function(){
    const room = new Room(50)
    const actual = room.areaInSquareMetres();
    assert.deepStrictEqual(actual, 50)
  });

  it('should start not painted', function(){
    const room = new Room(50)
    const actual = room.notPainted();
    assert.deepStrictEqual(actual, true)
  });

  it('should be able to be painted', function(){
    const room = new Room(50)
    const actual = room.canBePainted();
    assert.deepStrictEqual(actual, true)
  });

});
