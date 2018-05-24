function slasher(arr, howMany) {
  var a;
  for (a = 0; a < howMany; a++) {
    arr.shift(a);
  }
  return arr;
}

slasher([1, 2, 3], 2);
