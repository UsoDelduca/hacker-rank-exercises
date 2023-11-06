function plusMinus(arr) {
  let aboveZero = arr.filter((number) => number > 0).length / arr.length
  let belowZero = arr.filter((number) => number < 0).length / arr.length
  let isZero = arr.filter((number) => number == 0).length / arr.length
  return console.log(
    aboveZero.toFixed(6) +
      '\n' +
      belowZero.toFixed(6) +
      '\n' +
      isZero.toFixed(6)
  )
}
plusMinus([4, -1, 5, 0, 6, -2])
