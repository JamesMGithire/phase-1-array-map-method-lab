const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return(senSplit())
}

// Fun takes list and slipts each sentence into an array
// And creates a nested array of {sentnces{words}}
function senSplit() {
  let newT = tutorials.map((wordL)=>{
    const words = wordL.split(" ");
    const newWords =words.map((word)=>{
      const firstL = word.charAt(0);
      return firstL.toUpperCase()+word.substring(1);
    })
    return newWords.join(" ");
  })
  return(newT)
}