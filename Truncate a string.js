function truncateString(str, num) {
  var cutStr;
  if (num <= 3) {
    cutStr = str.substring(0, num).concat("...");
  } else if (num < str.length && str.length > 3) {
    cutStr = str.substring(0, num - 3).concat("...");
  } else if (str.length <= num) {
    cutStr = str.substring(0, num);
  }
  return cutStr;
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);
