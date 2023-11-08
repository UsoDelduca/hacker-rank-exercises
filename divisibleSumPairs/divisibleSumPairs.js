function divisibleSumPairs(n, k, ar) {
  // n = array length
  // k = any positive integer
  let count = 0
  for (let i = 0; i <= n; i++) {
    if ((ar[i] + ar[i + 1]) % k === 0) {
      count++
    }
    console.log('Count of pairs: ', count)
  }
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
