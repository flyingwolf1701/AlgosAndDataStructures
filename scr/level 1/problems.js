// Draw Stair
// time took to complete 10 min
function drawStair (num) {
  const star = '*'
  const space = ' '
  
  for (let i = 1; i <= num; i++){
    console.log(space.repeat(num - i).concat(star.repeat(i)))
  }
}

// drawStair(5);