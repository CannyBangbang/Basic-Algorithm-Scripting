function getIndexToIns(arr, num) {
  var answer = 0;
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var c = 0; c < arr.length; c++) {
    if (num > arr[c]) {
      answer = answer + 1;
    } else if (num == arr[c]) {
      return c;
    }
  }
  return answer;
}

getIndexToIns([2, 5, 10], 15);
