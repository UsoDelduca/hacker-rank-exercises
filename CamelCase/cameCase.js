function processData(input) {
  //Check the operation (S or C)
  if (input[0] === 'S') {
    //remove unnecessary characters
    //check when there is an Upper case letter
    //split the words where the Upper case letter is
    //remove the parenthesis
    //return a string separated by a space and Lower case
    console.log('Case S: I am in!!!')

    let trimInput = input.substring(4, input.length - 2)
    let splitInput = trimInput.split(/(?=[A-Z])/)
    return console.log(splitInput.join(' ').toLowerCase())
  }
  if (input[0] === 'C') {
    //Check for M, C or V
    if (input[2] === 'M') {
      console.log('Case C;M: I am in!!!')
      //check where the following word starts
      //make the firts letter of the following word Upper case
      //add a pair of parenthesis at the end
      //return the method name as a string
    }
    if (input[2] === 'V') {
      console.log('Case C;V: I am in!!!')
      //check where the following word starts
      //make the firts letter of the following word Upper case
      //return the variable name as a string
    }
    if (input[2] === 'C') {
      console.log('Case C;C: I am in!!!')
      //check where the first word starts
      //check where the following words start
      //make the firts letter of the following word Upper case
      //return the class name as a string
    }
  }
}

processData('S;M;plasticCupIsNotNice()')
