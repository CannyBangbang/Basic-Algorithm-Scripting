function bouncer(arr) {
  var arrNew = arr.filter(check);
  return arrNew;
}

function check(a) {
  return Boolean(a) !== false;
}

bouncer([7, "ate", "", false, 9]);
