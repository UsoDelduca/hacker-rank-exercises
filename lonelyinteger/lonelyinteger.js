function lonelyinteger(a) {
  // Write your code here
  const [lonely] = a
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr)
      } else {
        acc.pop()
      }
      return acc
    }, [])
  return console.log(lonely)
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])
// lonelyinteger([1, 1, 2])
