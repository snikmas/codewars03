// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {
  let h = 0; 
  let m = 0;
  let s = 0;
  
  m = Math.floor(seconds / 60);
  s = seconds % 60;
  
  h = Math.floor(m / 60);
  m = m % 60;
  return [h.toString().padStart(2, '0'), m.toString().padStart(2,'0'), s.toString().padStart(2, '0')].join(':')
}


// console.log(humanReadable(     0));
console.log(humanReadable(    59));
// console.log(humanReadable(    60));
// // console.log(humanReadable(    90));
// // console.log(humanReadable(  3599));
// // console.log(humanReadable(  3600));
// // console.log(humanReadable( 45296));
// // console.log(humanReadable( 86399));
// // console.log(humanReadable( 86400));
// console.log(humanReadable(359999));
