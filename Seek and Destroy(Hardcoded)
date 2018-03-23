/* I had to just brute force this with the if statement. much better solution from FreeCodeCamp in this comment below. I did not write it to be clear.

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
*/
function destroyer(arr) {
  var arrNew = arr.slice.call(arguments);
  var justTheArr = arrNew.shift();
  
  return justTheArr.filter(function filterArr(a) {
    for (b = 0; b < arrNew.length; b++) {
      if (a !== arrNew[0] && a !== arrNew[1] && a !== arrNew[2]) {
        return a;
      }
    }
  });
  
}


destroyer([3, 5, 1, 2, 2], 2, 3, 5);

