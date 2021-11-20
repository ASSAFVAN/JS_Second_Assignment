// let myStr = "indivisibility";
let myStr = "aabbbcde";

function countingDuplicates(str) {
  let arr = str.toLowerCase().split("").sort();
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      if (arr2[arr2.length - 1] !== arr[i]) {
        arr2.push(arr[i]);
      }
    }
  }
  return arr2.length;
}
console.log(countingDuplicates(myStr));
