console.log("CONFUNCTION FUNCTION WHAT'S YOUR FUNCTION");

// Expression (not hoisted)
const funcExpression = function() {
  return "I'm an expression!";
};

funcExpression();

// Declaration (hoisted)
funcDeclaration();

function funcDeclaration() {
  return "I'm a declaration!";
}

// Arrow syntax
const funcArrow = (arg1, arg2) => {
  return "I'm an arrow function";
};
funcArrow("something", "another thing");

const funcArrowOneArg = onlyArg => {
  return "I have one argument";
};

// Anonymous
[1, 2].forEach(function(item) {
  return "I'm anonymous";
});

// Reference vs invoking

function logNumber(number, index) {
  console.log(`Index: ${index} | Number: ${number}`);
}

// [2, 4, 3].forEach(logNumber);

// Higher-order function
// 1) Take a function as an argument
// 2) Returns a function

const forEach = function(array, callbackFunction) {
  for (i = 0; i < array.length; i++) {
    const item = array[i];
    callbackFunction(item, i);
  }
};

// forEach([5, 10, 12], logNumber);

const map = function(array, callbackFunction) {
  let result = [];

  for (i = 0; i < array.length; i++) {
    const item = array[i];
    const mappedValue = callbackFunction(item, i);
    result.push(mappedValue);
  }

  return result;
};

function addCatToEachItem(item, index) {
  return item + "Cat";
}

// console.log(map(["bear", "tiger", "mongoose"], addCatToEachItem));

// Scope (global vs. local)

// global example
const globalVar = "hello";

function sayHello() {
  console.log(globalVar);
}

// sayHello();

// Local examples
function defineHello() {
  const hello = "konichiwa";
}

function defineGoodbye() {
  const bye = "see ya";
}

// Closure has access to a variable outside of its scope

function numberMultiplier(multiplier) {
  return function(number) {
    return multiplier * number;
  };
}

const doublerFunction = numberMultiplier(2);
const triplerFunction = numberMultiplier(3);
const quintipularFunction = numberMultiplier(5);
// numberMultiplier(2)(8);
// doublerFunction = function(number) {
//   return 2 * number;
// }

// triplerFunction = function(number) {
//   return 3 * number;
// }

// const multiplerFunction = function(multipler, number) {
//   return multipler * number;
// };

// multiplerFunction(2, 8);

// console.log(doublerFunction(8));
// console.log(triplerFunction(10));
// console.log(quintipularFunction(50));

// Functional vs OO programming

// OO - Imperative: step-by-step instructions
// Functional - Declarative: input/out, given this input, give me this output

let x = 10;

function addSix() {
  x = x + 6;
  return x;
}

addSix();

addSix();

function functionalAddSix(x) {
  return x + 6;
}

// console.log(functionalAddSix(8));
// console.log(functionalAddSix(14));

// Recursion - A function that calls itself

function recursive(number) {
  if (number === 1) {
    console.log("FINISHED");
  }

  while (number > 0) {
    console.log(number);
    recursive(number - 1);
  }
}

// recursive(10);
