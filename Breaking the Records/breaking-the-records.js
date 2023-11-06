function breakingRecords(scores) {
  // Set array length (number of games)

  let n = scores.length
  let minPoints = 0
  let maxPoints = 0
  // Find the min amount of points
  let min = scores[0]
  // Find the max amount of points
  let max = scores[0]

  // loop through the array to find the Min and the Max points
  for (let i = 0; i <= n; i++) {
    if (scores[i] < min) {
      min = scores[i]
      minPoints++
    }

    if (scores[i] > max) {
      max = scores[i]
      maxPoints++
    }
  }
  // count how many times she broke the record for min points
  return [maxPoints, minPoints]
}

console.log(
  breakingRecords([10, 24, 35, 20, 11, 9, 23, 43, 21, 19, 12, 10, 5, 22])
)
