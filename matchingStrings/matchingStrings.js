function matchingStrings(strings, queries) {
  // function should return an array of matching queries
  // n = strings.length
  // q = queries.length

  // let n = strings.length
  // let q = queries.length
  // let count = 0

  // loop the queries array
  // loop the string array
  // check if queries[i] matches strings[i]
  // when there is a match, update counter

  return queries.map(
    (string) => strings.filter((query) => query === string).length
  )
}

console.log(
  matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
)

// (matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']))
