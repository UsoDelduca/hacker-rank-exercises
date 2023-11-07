function processData(input) {
  //Check the operation (S or C)
  if (input[0] === 'S') {
    //remove unnecessary characters
    //check when there is an Upper case letter
    //split the words where the Upper case letter is
    //remove the parenthesis
    //return a string separated by a space and Lower case
    if (input[2] !== 'M') {
      let trimInput = input.substring(4, input.length)
      let splitInput = trimInput.split(/(?=[A-Z])/)
      return splitInput.join(' ').toLowerCase()
    }
    let trimInput = input.substring(4, input.length - 2)
    let splitInput = trimInput.split(/(?=[A-Z])/)
    return splitInput.join(' ').toLowerCase()
  }
  if (input[0] === 'C') {
    //Check for M, C or V
    //check where the following word starts
    //make the firts letter of the following word Upper case
    //add a pair of parenthesis at the end
    //return the method name as a string
    let trimInput = input.substring(4, input.length)
    let i = 0
    while (true) {
      i = 0
      while (i < trimInput.length) {
        if (trimInput[i] == ' ') {
          let charArray = [...trimInput]
          charArray[i + 1] = charArray[i + 1].toUpperCase()
          trimInput = ''
          for (let k = 0; k < charArray.length; k++) {
            if (k != i) trimInput += charArray[k]
          }
          break
        }
        i++
      }
      if (input[2] === 'M') {
        const result = trimInput + '()'
        return result
      }
      if (input[2] === 'V') {
        //check where the following word starts
        //make the firts letter of the following word Upper case
        //return the variable name as a string
        return trimInput
      }
      if (input[2] === 'C') {
        //check where the first word starts
        //check where the following words start
        //make the firts letter of the following word Upper case
        //return the class name as a string
        const result = trimInput[0].toUpperCase() + trimInput.slice(1)
        return result
      }
      if (i == trimInput.length) {
        break
      }
    }
  }
}

console.log('S;V: ', processData('S;V;iPad'))
console.log('C;M: ', processData('C;M;mouse pad'))
console.log('C;C :', processData('C;C;code swarm'))
console.log('S;C: ', processData('S;C;OrangeHighlighter'))
