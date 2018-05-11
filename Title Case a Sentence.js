function titleCase(str) {
  var breakWord;
  var combineWords;
  var a;
  var word = str.toLowerCase().split(" ");
    for (a = 0; a < word.length; a++) {
       breakWord = word[a].split('');
       breakWord[0] = breakWord[0].toUpperCase();
       word[a] = breakWord.join(''); 
       combineWords = word.join(' ');
    }    
  return combineWords;
}

titleCase("I'm a little tea pot");
