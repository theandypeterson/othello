module.exports = {
  up: function(position) {
    const result = position - 8;
    return result >= 0 ? result : null;
  },

  down: function(position) {
    const result = position + 8;
    return result <= 63 ? result : null;
  },

  left: function(position) {
    const result = position - 1;
    return result%8 != 7 ? result : null;
  },

  right: function(position) {
    const result = position + 1;
    return result%8 != 0 ? result : null;
  }
}
