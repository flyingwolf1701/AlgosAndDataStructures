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
// Time complete: 13 min
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

arr1 = [10,'cat', 99, 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];
console.log(commonElements(arr1, arr2, arr3))


/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {

}

/* ------------------------------------------------------------------------------ */


