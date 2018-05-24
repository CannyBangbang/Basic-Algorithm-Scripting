function confirmEnding(str, target) {
  var lengthOfTarget = target.length;
  return str.substr(-lengthOfTarget) == target;
}

confirmEnding("He has to give me a new name", "name");
