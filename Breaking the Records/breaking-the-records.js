function breakingRecords(scores) {
  // Set array length (number of games)

  let n = scores.length

  // Find the min amount of points
  const minScore = Math.min(...scores)

  // Find the max amount of points
  const maxScore = Math.max(...scores)

  console.log(minScore, maxScore)
  // start a counter
  const minPoints = 0
  // count how many times she broke the record for min points

  for (const score in scores) {
    if (score < score) {
    }
  }
}

breakingRecords([10, 24, 35, 20, 11, 9, 23, 43, 21, 19, 12, 10, 5, 22])
