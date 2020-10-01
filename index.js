const isPalindrome = (sentence) => {
    const sentenceLowerCase = sentence.toLowerCase();
    const charactersArr = sentenceLowerCase.split('');
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    let lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
   
  console.log(isPalindrome("Madam, I'm Adam")); // logs true

  console.log(isPalindrome("avada kedavra")); // logs false