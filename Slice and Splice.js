function frankenSplice(arr1, arr2, n) {
  let arrCombo = arr2.slice(0)
  arrCombo.splice(n, 0, ...arr1);
  return arrCombo;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);