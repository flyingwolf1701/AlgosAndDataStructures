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

console.log(duplicateNumber([1,5,4,3,6,2,4,7])) // 4

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













/* ------------------------------------------------------------------------------ */


