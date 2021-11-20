let str1 = "moOse";

function longestWord(str) {
  str = str.toLowerCase();
  let arr = str.split("").sort();
  arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr2.push(arr[i]);
    }
  }
  if (str.length === arr2.join("").length) {
    return true;
  } else {
    return false;
  }
}
console.log(longestWord(str1));
