function rot13(str) {
  var arr = str.split("");
  var a;
  var arrcode;
  var theLetter;
  var arrAnswer = [];
  for (a = 0; a < arr.length; a++) {
    arrCode = arr[a].charCodeAt();
    if (arrCode >= 65 && arrCode <= 77) {
      theLetter = String.fromCharCode(arrCode + 13);
      arrAnswer.push(theLetter);
    } else if (arrCode >= 78 && arrCode <= 90) {
      theLetter = String.fromCharCode(arrCode - 26 + 13);
      arrAnswer.push(theLetter);
    } else {
      arrAnswer.push(arr[a]);
    }
  }
  return arrAnswer.join("");
}

rot13("SERR PBQR PNZC");
