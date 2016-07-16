module.exports = {
  findValidMoves: function (board, color) {
    var result = [];
    board.forEach(function(element, index) {

    });
    return result;
  },

  moveFromPosition: function(position, directions) {
    directions.forEach(function(direction) {
      position = direction(position);
    });
    return position;
  }

};
