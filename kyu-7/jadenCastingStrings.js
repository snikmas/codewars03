// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
  //...
  let str = this.split(' ');
  let newStr = str.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  })

  return newStr.join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
