function findLongestWord(str) {
  var arr = [];
  var number;
  var pushHolder;
  var highNumber = 0;
  var a;
  var b;
  
  arr = str.split(" ");
  for (number = 0; number < arr.length; number++) {
    pushHolder = arr.shift().length;
    arr.push(pushHolder);
      arr.sort(function(a, b) {
  return b - a;
});
}
  return arr[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");
