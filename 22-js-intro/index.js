// myAwesomeFunction();

// const myAwesomeFunction = function() {
//   alert("YO!");
// };

// function myAwesomeFunction() {
//   alert("I LIKE COOKIES AND CAKE, YO!");
// }

// myAwesomeFunction.something = "cool";

// console.log(myAwesomeFunction.something);

var nums = [1, 6, 3, 4, 5];

// function logArray(item, index) {
//   console.log(`${index} | ${item}`);
// }

// nums.forEach(logArray);

// RECOMMENDED
// nums.forEach(function(item, index) {
//   console.log(index, item);
// });

mappedNums = nums.map(function(item) {
  return item + "lion";
});

filteredNums = nums.filter(function(item, index) {
  return item % 2 === 0;
});

// console.log(mappedNums);

// let total = 0;

// nums.forEach(function(item) {
//   total += item;
// });

// console.log(total);

const result = nums.reduce(function(aggregator, item, index) {
  aggregator += item; // + "1cat" + "2cat"

  return aggregator;
}, 0);

console.log(result);
