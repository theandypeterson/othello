var expect = require('chai').expect;
var Player = require('./player');
var Direction = require('./direction');
describe('Player', function() {
  describe('#findValidMoves()', function() {
    var incomingJSON = {
      "width": 8,
      "height": 8,
      "max-index": 63,
      "squares": ["-","-","-","-","-","-","-","-",
                  "-","-","-","-","-","-","-","-",
                  "-","-","-","-","-","-","-","-",
                  "-","-","-","w","b","-","-","-",
                  "-","-","-","b","w","-","-","-",
                  "-","-","-","-","-","-","-","-",
                  "-","-","-","-","-","-","-","-",
                  "-","-","-","-","-","-","-","-"]
    };

    xit('should return valid moves', function() {
                  //  0   1   2   3   4   5   6   7
      const board = ["-","-","-","-","-","-","w","-",
                  //  8   9  10  11  12  13  14  15
                     "-","-","-","-","-","-","-","b",
                  // 16  17  18  19  20  21  22  23
                     "-","-","-","-","-","-","-","-",
                  // 24  25  26  27  28  29  30  31
                     "-","-","-","w","b","-","-","-",
                  // 32  33  34  35  36  37  38  39
                     "-","-","-","b","w","w","-","w",
                  // 40  41  42  43  44  45  46  47
                     "-","-","w","-","b","-","b","-",
                  // 48  49  50  51  52  53  54  55
                     "-","-","-","-","-","-","w","b",
                  // 56  57  58  59  60  61  62  63
                     "-","-","-","-","-","-","-","-"]
      const color = "w"
      const validMoves = Player.findValidMoves(board, color);
      expect(validMoves.length).to.equal(9);
      expect(validMoves).to.include(19);
      expect(validMoves).to.include(20);
      expect(validMoves).to.include(21);
      expect(validMoves).to.include(29);
      expect(validMoves).to.include(34);
      expect(validMoves).to.include(38);
      expect(validMoves).to.include(43);
      expect(validMoves).to.include(51);
      expect(validMoves).to.include(52);
    });
  });

  describe('movement', function() {
    it('should be able to move up', function() {
      const currentPosition = 8;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.up]);
      expect(newPosition).to.equal(0);
    });

    it('should be able to move down', function() {
      const currentPosition = 8;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.down]);
      expect(newPosition).to.equal(16);
    });

    it('should be able to move left', function() {
      const currentPosition = 4;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.left]);
      expect(newPosition).to.equal(3);
    });

    it('should be able to move right', function() {
      const currentPosition = 4;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.right]);
      expect(newPosition).to.equal(5);
    });

    it('should be able to move in multiple directions', function() {
      var currentPosition = 35;
      currentPosition = Player.moveFromPosition(currentPosition, [Direction.up, Direction.left]);
      expect(currentPosition).to.equal(26);

      currentPosition = Player.moveFromPosition(currentPosition, [Direction.down, Direction.down, Direction.right]);
      expect(currentPosition).to.equal(43);
    });

    it('should catch itself going above the board', function() {
      const currentPosition = 7;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.up]);
      expect(newPosition).to.not.be.ok;
    });

    it('should catch itself going below the board', function() {
      const currentPosition = 56;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.down]);
      expect(newPosition).to.not.be.ok;
    });

    it('should catch itself going off the left side of the board', function() {
      const currentPosition = 24;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.left]);
      expect(newPosition).to.not.be.ok;
    });

    it('should catch itself going off the right side of the board', function() {
      const currentPosition = 23;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.right]);
      expect(newPosition).to.not.be.ok;
    });

    it('should catch itself going off the board with multiple moves', function() {
      const currentPosition = 32;
      const newPosition = Player.moveFromPosition(currentPosition, [Direction.left, Direction.up]);
      expect(newPosition).to.not.be.ok;
    });
  });
});
