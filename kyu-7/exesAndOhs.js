// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.



function XO(arr){
  arr = arr.split('')
  return (arr.filter((el) => el.toLowerCase() == 'x').length == arr.filter((el => el.toLowerCase() == 'o')).length)
}



console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))