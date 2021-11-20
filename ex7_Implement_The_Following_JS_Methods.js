const myArray = [1, 2, 3, 4, 5];

//Filter
const evens = myArray.filter((num) => {
  return num % 2 === 0;
});
console.log(evens);

//ForEach
let sum = 0;
const multiply = myArray.forEach(function (num) {
  console.log(num * num);
});

//Map
const doubles = myArray.map((num) => num * 2);
console.log(doubles);
