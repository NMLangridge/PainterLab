const Decorator = function(){
  this.stock = []
}

Decorator.prototype.addTin = function(stock){
  this.stock.push(stock)
};

Decorator.prototype.calculateLitres = function(stock){
  total = 0
  for (let tin of this.stock) {
    total += tin.litres;
  }
  return total;
};

Decorator.prototype.enoughPaint = function(stock){
  for (let tin of this.stock)
  if (tin.litres < this.area) {
  }
  return false;
};

Decorator.prototype.paintRoom = function(stock){
  total = 0
  for (let tin of this.stock) {
    total += tin.litres;
  }
  if (total >= this.area) {
  }
  return true;
};

module.exports = Decorator;
