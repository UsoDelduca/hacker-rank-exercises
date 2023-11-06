function miniMaxSum(arr) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)

  const minSum = arr.filter((number) => number < max)
  const maxSum = arr.filter((number) => number > min)

  const minResult = minSum.reduce((acc, curr) => acc + curr, 0)
  const maxResult = maxSum.reduce((acc, curr) => acc + curr, 0)

  return console.log(minResult, maxResult)
}

miniMaxSum([1, 2, 3, 4, 5])
