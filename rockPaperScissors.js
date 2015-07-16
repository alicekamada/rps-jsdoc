/**
 * @description great toy problem
 * @param {Number} length - number of rounds played
 * @return {Array} combination of possible hands
 */
var rockPaperScissors = function (length) {
  var states = [['rock'], ['paper'], ['scissors']];
  if (length === 1) { return states; }
  else {
    var lowResults = rockPaperScissors(length-1);
    var results = [];
    lowResults.forEach(function (input) {
      states.forEach(function (state) {
        results.push(input.concat(state));
      });
    });
    return results;
  }
};
