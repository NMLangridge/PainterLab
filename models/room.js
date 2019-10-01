const Room = function(area){
  this.area = area
}

Room.prototype.areaInSquareMetres = function(){
  return this.area = 50
};

Room.prototype.notPainted = function(){
  return this.area = true
};

Room.prototype.canBePainted = function(){
  return this.area = true
};

module.exports = Room;
