// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


// first solution, werid?
function digitalRoot(n) {
  // ...
  let sum = 0;
  n = n.toString().split('');
  
  n.forEach((num) => {
    sum += Number(num);
  })

  return sum.toString().length == 1 ? sum : digitalRoot(sum) 
}
