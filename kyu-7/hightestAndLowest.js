
function highAndLow(numbers){
  // ...
  let num = numbers.split(' ').map((x) => {
    return Number(x)
})
  return String(Math.max(...num)) + ' ' + String(Math.min(...num)) 
}

console.log(highAndLow('1 2 3 4 5'))
console.log(highAndLow('1 2 -3 4 5'))
console.log(highAndLow('1 9 3 4 -5'))