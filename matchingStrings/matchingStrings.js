function matchingStrings(strings, queries) {
  // n = strings.length
  // q = queries.length

  let n = strings.length
  let q = queries.length
  let count = 0

  // loop the queries array
  // loop the string array
  // check if queries[i] matches strings[i]
  // when there is a match, update counter

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < q; j++) {
      if (queries[j] === strings[i]) {
        count += 1
      }
    }
    console.log(count)
  }
}

matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])

// (matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']))
