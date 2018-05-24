function palindrome(str) {
  // Good luck!
  var noCapsSyms = str
    .toLowerCase()
    .replace(/[-~`!@#$%^&-*()+=:;"'<,>.?/|_" "]/g, "");
  var flipped = noCapsSyms
    .split("")
    .reverse()
    .join("");
  return flipped == noCapsSyms;
}

palindrome("0_0 (: /- :) 0-0");
