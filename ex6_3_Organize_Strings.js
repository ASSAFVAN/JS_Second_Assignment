let str1 = "xyaabbbccccdefww";
let str2 = "xxxxyyyyabklmopq";

function longestWord(firstString, secondString) {
  let str = firstString + secondString;
  let arr = str.split("").sort();
  arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr2.push(arr[i]);
    }
  }
  return arr2.join("");
}
console.log(longestWord(str1, str2));
