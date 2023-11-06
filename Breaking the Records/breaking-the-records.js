function breakingRecords(scores) {
  // Set array length (number of games)

  let n = scores.length
  // start a counter
  let minPoints = 0
  let maxPoints = 0
  for (let i = 0; i <= n; i++) {
    // Find the min amount of points
    let minScore = scores[i]
    // Find the max amount of points
    let maxScore = scores[i]
    if (scores[i + 1] < scores[i]) {
      scores[i + 1] = minScore
      minPoints++
    }

    if (scores[i + 1] > scores[i]) {
      scores[i + 1] = maxScore
      maxPoints++
    }

    // count how many times she broke the record for min points
    console.log(`Round ${i}: `, minPoints, maxPoints)
  }
}

breakingRecords([10, 24, 35, 20, 11, 9, 23, 43, 21, 19, 12, 10, 5, 22])
