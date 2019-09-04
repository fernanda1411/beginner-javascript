/* Whale Talk
Take a sentence like, ‘Turpentine and turtles,’ and translate it into its whale talk equivalent: 
‘UUEEIEE A UUEE’.

There are a few simple rules to translating text to the whale language:

There are no consonants. Only vowels.
The ‘u’s and ‘e’s are extra long, so we must double ‘u’s and ‘e’s.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started! */


const input = 'Turpentine and turtles.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (var i = 0; i < input.length; i++){
  for (var j = 0; j < vowels.length; j ++){
    
    if(input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  
  if(input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());