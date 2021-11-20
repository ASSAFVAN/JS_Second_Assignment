let myString = "abcd";

function mumbling(str) {
  let arr = str.split("");
  arr2 = [];
  for (i = 0; i < arr.length; i++) {
    arr2[i] = arr[i].repeat(i + 1);
    arr2[i] = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
  }
  return (str = arr2.join("-"));
}
console.log(mumbling(myString));
