function matchingStrings(strings, queries) {
  // function should return an array of matching queries

  // loop the queries array
  // loop the string array
  // check if queries[i] matches strings[i]
  // when there is a match, update the result array

  return queries.map(
    (string) => strings.filter((query) => query === string).length
  )
}

console.log(
  matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
)
