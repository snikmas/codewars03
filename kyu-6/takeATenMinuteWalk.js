function isValidWalk(walk) {
  //insert brilliant code here
  let a = 0, b = 0;
  walk.forEach((k) => {
    switch (k){
      case ('n'):
        a += 1;
        break;
      case ('s'):
        a -= 1;
        break;
      case ('w'):
        b += 1;
        break;
      case('e'):
        b -= 1;
        break;
    }
  })
  console.log(a, b, walk.length)
  return a == 0 && b == 0 && 10 == walk.length;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
