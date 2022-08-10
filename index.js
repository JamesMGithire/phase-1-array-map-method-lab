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

// Function takes list and slipts each sentence(wordL) into an array(of "words")

function titleCased(){
  let newT = tutorials.map((wordL)=>{
    const words = wordL.split(" ");
    // newWords are capitalised
    const newWords =words.map((word)=>{
      const firstL = word.charAt(0);
      return firstL.toUpperCase()+word.substring(1);
    })
    return newWords.join(" ");
    // retrun joined capitalised words as new scentences
  })
  return newT;
}

// General understanding: .map(), .find and .filter works as for loop works in handling arrays and objects.