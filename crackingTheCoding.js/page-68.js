// print all positive int solution to the equation  a^3 + b^3 = c^3 + d^3, where a,b,c and d are int between 1 and 1000

let a = b = c = d = 0;

for (let i1 = 0; i1 < 1001; i1++) { //a 
  for (let i2 = 0; i2 < 1001; i2++) { // b
    for (let i3 = 0; i3 < 1001; i3++) { // c
      for (let i4 = 0; i4 < 1001; i4++) { // d     
        if (pow(i1) + pow(i2) == pow(i3) + pow(i4)) {
          console.log(i1, i2, i3, i4)
          break

        } 
      }
    }
  }
}

function pow(n) {
  return Math.pow(n, 3)
}