/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Find the AM and PM

  const lastTwo = s.substring(8)

  // ignore AM or PM

  const timeOnly = s.substring(0, 8)

  // Make an array to check

  const times = timeOnly.split(':')
  console.log('Times array: ', times)

  if (lastTwo === 'PM') {
    console.log('First two: ', times[0])
    if (times[0] !== '12') {
      times[0] = Number(times[0]) + 12
      console.log('NOT 12: ', times)
    }
  } else {
    // case is AM
    if (times[0] === '12') {
      times[0] = '00'
    }
  }

  return times.join(':')
}

timeConversion('09:33:00PM')
