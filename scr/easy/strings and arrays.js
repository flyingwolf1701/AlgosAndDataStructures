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
   
    if (i % 3 === 0 && i % 5 === 0) console.log(i ,'fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i)
  }
}

fizzBuzz(15)




