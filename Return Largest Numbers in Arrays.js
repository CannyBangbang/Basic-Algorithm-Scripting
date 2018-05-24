function largestOfFour(arr) {
  var singleArray;
  var combineArray = [];

  for (a = 0; a < arr.length; a++) {
    singleArray = arr[a].sort(function(b, c) {
      return c - b;
    });
    combineArray[a] = singleArray.shift();
  }

  return combineArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
