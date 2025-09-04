import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers1 = numbers.map((x) => x * 2);
console.log(
  "Create a new array by doing something with each item in an array(x * 2):" +
    newNumbers1
);

////Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter((num) => num < 10);
console.log(
  "Create a new array by keeping the items that return true(num < 10): " +
    newNumbers2
);

// Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers3 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(
  "Accumulate a value by doing something to each item in an array(accumulator + currentNumber):" +
    newNumbers3
);

//Find - find the first item that matches from an array.
const newNumbers4 = numbers.find((num) => num > 10);
console.log(
  " find the first item that matches from an array (num > 10): " + newNumbers4
);

//FindIndex - find the index of the first item that matches.
const newNumbers5 = numbers.findIndex((num) => num > 10);
console.log(
  "find the index of the first item that matches(num > 10):" + newNumbers5
);
