// Draw Stair
// time took to complete 10 min 12/20/2022
function drawStair (num) {
  const star = '*'
  const space = ' '
  
  for (let i = 1; i <= num; i++){
    console.log(space.repeat(num - i).concat(star.repeat(i)))
  }
}

// drawStair(5);

/* -------- */

//FizzBuzz
// Time to complete 9 minutes 12/22/2022
/* 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]
*/

const fizzBuzz = (num) => {
  for (let i = num; i > 0; i--) {
   
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i)
  }
}

// fizzBuzz(15)

/* -------- */

//Pow

/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow (x, y) {
  let num = 1;
  while (y > 0) {
    num = x * num;
    y--
  }
  return num;
};

// console.log(pow(2, 1))

//recurrsion


function recPow (base, power) {
  //basecase: if power = 0 return 1, if power = 1 return base
  if (power === 0) return 1;
  if (power === 1) return base;

  return base * recPow (base, power -1)
}

// console.log(recPow(2, 4))

/* ------------------------------------------------------------------------------ */

// Duplicate Number
/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

function duplicateNumber(array) {
  const sorted = array.sort((a,b) => a - b)
  console.log(array)
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i]
    }
  }
  return 'no duplicates found'
}

// console.log(duplicateNumber([1,5,4,3,6,2,4,7])) // 4

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/
// That is how I solved it. 

/* ------------------------------------------------------------------------------ */

// Fast Cache
/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.

 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
*/

function fastCache(func) {
  const cache = {}

  return function (arg) {
    console.log(arg)
    if (Object.hasOwn(cache, arg)) return `from cache ${cache[arg]}`;
    const result = func(arg);
    cache[arg] = result;
    return `cached ${result}`
  }
}

const twoSum = (num) => num + 2;
const cached = fastCache(twoSum);

// console.log(cached(2))
// console.log(cached(4))
// console.log(cached(2))
// console.log(cached(5))

//extention - This is a weird solution, I am not sure that I am a fan, mostly because of the levels of tests and callback functions I would have to write to test this myself.  

function fastCacheAdvanced(func) {
  const cache = {}

  return function (...args) {
    console.log(args)
    const argString = JSON.stringify(args)
    console.log(argString)
    if (Object.hasOwn(cache, argString)) return `from cache ${cache[argString]}`;
    const result = func(...args);
    cache[argString] = result;
    return `cached ${result}`
  }
}

const twoSumX = (num) => num + 2;
const cachedX = fastCacheAdvanced(twoSumX);

// console.log(cachedX([2,4,6]))
// console.log(cachedX(4))
// console.log(cachedX(2))
// console.log(cachedX(4))

/* ------------------------------------------------------------------------------ */

// Common Elememnts
// Time complete: 13
/*
Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/
// elements have to be common to all k arrays. 
// iterate through all of this one time and add each one to an object. Then I would use Object.entries to push the key of the objects with a value of k to a new array. 

const commonElements = (...args) => {
  const commonEls = {};
  const output = [];

  args.forEach(arr => {
    arr.forEach(el => {
      if (!commonEls[el]) {
        commonEls[el] = 0;
      }
      commonEls[el] += 1;
    })
  })

  if (output.length === 0) return "Nothing in Common!"

  for (const [key, value] of Object.entries(commonEls)) {
    if (value === args.length) {
      output.push(key)
    }
  }

  return output
}

arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];
// console.log(commonElements(arr1, arr2, arr3))

/* ------------------------------------------------------------------------------ */

// Balanced Parens
// 
/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
  const parenObj = { '{': '}', '(': ')', '[': ']'};
  let stack = []

  for (char of input) {
    if (parenObj[char]) stack.push(char); 
    else if (char === '}' || char === ']' || char === ')') {
      const checkValue = stack.pop()
      if (parenObj[checkValue] !== char) return false;
    }
  }
  return stack.length === 0;
};

// console.log(balancedParens('[]')) // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false

/* ------------------------------------------------------------------------------ */

/* Merge Ranges

Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

*/

const mergeRanges = intervals => {
// sort the arrays by first number
  const sorted = intervals.sort((a, b) => a[0] - b[0])
  console.log(sorted)
 
  
};

// console.log(mergeRanges([[8, 10], [15, 18], [1, 3], [2, 6]]))

/* ------------------------------------------------------------------------------ */

function mergeRangesAI(intervals) {
  // Sort the intervals array in ascending order based on the start time of the intervals
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize an empty result array
  const result = [];

  // Initialize a current interval with the first interval in the sorted array
  let currentInterval = intervals[0];

  // Iterate through the rest of the sorted array
  for (const interval of intervals.slice(1)) {
    // If the current interval overlaps with the interval being considered, merge the two intervals
    if (interval[0] <= currentInterval[1]) {
      currentInterval = [Math.min(currentInterval[0], interval[0]), Math.max(currentInterval[1], interval[1])];
    }
    // If the current interval does not overlap with the interval being considered, add the current interval to the result array and update the current interval to be the interval being considered
    else {
      result.push(currentInterval);
      currentInterval = interval;
    }
  }

  // Add the current interval to the result array
  result.push(currentInterval);

  return result;
}
/* ------------------------------------------------------------------------------ */

/* Apple Stock
** time to comeple: 20 min
Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/
// working on the extention. First I want to find the min and its index
// then I want to find the max after the min has been found. 
const highestProfit = appleStock => {
  let buy = Infinity;
  let sell = -Infinity;
  let buyIndex;
  

  // Find buy price 
  for (let i = 0; i < appleStock.length - 1; i++) {
    if (appleStock[i] < buy && appleStock[i] > 0) {
      buy = appleStock[i]
      buyIndex = i;
    }
  }
  
  // Find sell price
  for (j = buyIndex + 1; j < appleStock.length; j++){
    if (appleStock[j] > sell && appleStock[j] > 0) sell = appleStock[j];
  }
  
  // calculate profit -> if <= 0 return 0
  let profit = sell - buy
  return profit <= 0 ? 0 : profit
}

// console.log(highestProfit([1000, 500, 2000, 1000, 0])) // 1500
// console.log(highestProfit([1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100])) // 1000
// console.log(highestProfit([200, 600, 700, 100, 300, 200, 620])) // 520
// console.log(highestProfit([2000, 1000, 100, 200, 400, 100])) //300

/* ------------------------------------------------------------------------------ */

/* Nested Array Max

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/

const nestedArrMax = arr => {
  // loop through the original array, if it is a number check to see if it is the max number
  // if it is an array loop through that array with the same check
  let max = -Infinity;
  const helper = (array) => {
    for (let el of array) {
      if (typeof el === 'number') {
        if (el > max) max = el
      } else {
        helper(el)
      }
    }
  }
  helper(arr);
  return max
};

// console.log(nestedArrMax([1,2,4,[5,[6],7],8, [10, [11]]]))

/* 

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {
  let currentLevel = 1;
  let max = -Infinity;
  const helper = (array) => {
    for (let el of array) {
      console.log(currentLevel)
      if (typeof el === 'number') {
        if (el > max) max = el
      } else if (level >= currentLevel) {
        currentLevel++
        helper(el)
      }
    }
  }
  helper(arr);
  return max
};
const testArray = [1,2,[5],4, [6, [7, [8], 9], 10]]
console.log(nestedArrMaxLevel(testArray, 2))

/* ------------------------------------------------------------------------------ */