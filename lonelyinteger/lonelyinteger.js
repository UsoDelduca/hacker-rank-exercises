function lonelyinteger(a) {
  // Write your code here
  let n = a.length

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (a[i] === a[j]) {
        console.log(`it's a match!!! ${a[i]}, ${a[j]}`)
      } else {
        return console.log(a[i])
      }
    }
  }
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])
// lonelyinteger([1, 1, 2])
