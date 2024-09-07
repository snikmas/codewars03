// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {
  
  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds / 60 % 60);
  let s = seconds % 60;

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
