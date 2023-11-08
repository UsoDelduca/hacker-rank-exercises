function findMedian(arr) {
  // Write your code here

  // sort array

  let sorted = arr.sort((a, b) => a - b)
  console.log(sorted)
  // find median
  let medianIdx = Math.floor(sorted.length / 2)
  console.log(sorted[medianIdx])
}

findMedian([4, 5, 3, 2, 6, 1, 0, 11, 9, 7, 13])
