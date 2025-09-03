var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

var numbersMap = numbers.map((num) => num + 1);
console.log("numbersMap: " + numbersMap);

//Filter - Create a new array by keeping the items that return true.

var numbersFiler = numbers.filter(function (num) {
  return num > 40;
});

console.log("numbersFiler: " + numbersFiler);

//Reduce - Accumulate a value by doing something to each item in an array.

var numbersReduce = numbers.reduce(function (acc, currNum) {
  return acc + currNum;
});
console.log("numbersReduce: " + numbersReduce);

//Find - find the first item that matches from an array.

var numberFind = numbers.find(function (num) {
  return num > 10;
});
console.log("numberFind: " + numberFind);

//FindIndex - find the index of the first item that matches.

var numberFind = numbers.findIndex(function (num) {
  return num == 48;
});
console.log("numberFind: " + numberFind);
