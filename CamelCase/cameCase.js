function processData(input) {
  //Check the operation (S or C)
  let trimInput = input.substring(4)
  if (input[0] === 'S') {
    //remove unnecessary characters
    //check when there is an Upper case letter
    //split the words where the Upper case letter is
    //remove the parenthesis
    //return a string separated by a space and Lower case
    if (input[2] !== 'M') {
      let splitInput = trimInput.split(/(?=[A-Z])/)
      return console.log(splitInput.join(' ').toLowerCase())
    }
    let trimInput2 = trimInput.substring(0, trimInput.length - 2)
    let splitInput = trimInput2.split(/(?=[A-Z])/)
    return console.log(splitInput.join(' ').toLowerCase())
  }
  if (input[0] === 'C') {
    //Check for M, C or V
    //check where the following word starts
    //make the firts letter of the following word Upper case
    //add a pair of parenthesis at the end
    //return the method name as a string
    let trimInput = input.substring(4)
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
        return console.log(result)
      }
      if (input[2] === 'V') {
        //check where the following word starts
        //make the firts letter of the following word Upper case
        //return the variable name as a string
        return console.log(trimInput)
      }
      if (input[2] === 'C') {
        //check where the first word starts
        //check where the following words start
        //make the firts letter of the following word Upper case
        //return the class name as a string
        const result = trimInput[0].toUpperCase() + trimInput.slice(1)
        return console.log(result)
      }
      if (i == trimInput.length) {
        break
      }
    }
  }
}

processData('S;V;iPad')
processData('C;M;mouse pad')
processData('C;C;code swarm')
processData('S;C;OrangeHighlighter')
