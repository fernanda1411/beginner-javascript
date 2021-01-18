/* Message Mixer
Message Mixer is a messaging service that allows you to 
perform an action on input text and display the output of 
that behavior to the console. For example, with the current 
functions defined in Message Mixer, you can:

count the characters in a message
capitalize the first character of words
reverse a message’s words in place
reversing characters in place
replace the first occurrence of a string
replace all occurrences of a string
encode text by swapping certain characters for other characters
At present, Message Mixer runs as a program in a single file. 
This single file includes functions that define behavior as well as the output. 
Message Mixer knows that by extracting the functions into a module, 
logic can be reused in different parts of our application.

Let’s help Message Maker turn the program into a module! */

const MessageMixer = {};

const countCharacter = function (inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

const capitalizeFirstCharacterOfWords = function (string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let words = arr[i];
        arr[i] = words[0].toUpperCase() + words.substring(1); 
    }
  return arr.join(" "); 
};

const reverseWord = function (word) {
  return word.split("").reverse().join("");
};

const reverseAllWords = function (sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};

const replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

const replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

const encode = function (string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};


const palindrome = function (str){
  return str + " " + reverseWord(str);
}

const pigLatin = function (sentence, character){
  return sentence.split(' ').join(character + ' ');
}

export {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin};

// MessageMixer.countCharacter();
// MessageMixer.capitalizeFirstCharacterOfWords();
// MessageMixer.reverseWord();
// MessageMixer.reverseAllWords();
// MessageMixer.replaceFirstOccurence();
// MessageMixer.replaceAllOccurrences();
// MessageMixer.encode();