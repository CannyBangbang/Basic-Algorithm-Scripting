function reverseString(str) {
  var revStr = str
    .split("")
    .reverse()
    .join("");

  return revStr;
}

reverseString("hello");
