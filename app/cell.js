// CELL CONSTRUCTOR

var Cell = function(){
  this.value = null;
};

Cell.prototype.setState = function(player) {
  this.value = player;
};

Cell.prototype.playable = function() {
    if (this.value != null)
      return false;
    else return true;
};
Cell.prototype.render = function(){
  return this.value;
}
