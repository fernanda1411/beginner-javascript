// const numbers = [1, 10, 100, 1000];

// // console.log(numbers.map(el => el * 2))

// numbers.forEach((el, idx, arr) => {numbers[idx] = el * 2})

// console.log(numbers)

// console.log(numbers.reduce((juntador, el) => {
//     console.log(`juntador: ${juntador} - currentElement: ${el}`)
//     return juntador + el
// }, 0))


// const frutas = ['abacatE', 'lAranja', 'mOrango', 'cEreja', 'Uva', 'morango'];

// const result = frutas.findIndex(el => el === 'morango')
// const result = frutas.every(el => el === el.toLowerCase())
// const result = frutas.some(el => el === el.toLowerCase())


// console.log(result)


// .map   return uma array


// .forEach   return undefined


// const frutasMaiusculas = frutas.0(el => el.length > 3);
// const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

// const frutasMaiusculas = [];

// for(let i = 0; i < frutas.length; i++) {
//     frutasMaiusculas.push(frutas[i].toUpperCase())
// }

// frutas.forEach(fruta => frutasMaiusculas.push(fruta.toUpperCase()));



// console.log(frutasMaiusculas)

/*_________________________________________________________________________________*/
/*First, declare a variable named myArray and assign it to an empty array. 

Great! Now populate myArray with two strings. Put your full name in the first string, 
and your Skype handle in the second.

Next, declare a function named cutName. It should expect a parameter name.
cutName should return an array by breaking up the input string into individual words.
Example: cutName("Douglas Calhoun") should return ["Douglas", "Calhoun"]
Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]

Declare a new variable named myInfo and assign it to an empty object literal.
Add the following three key-value pairs to myInfo:
Key: fullName, Value: The result of calling cutName on the name string within myArray.
Key: skype, Value: The Skype handle within myArray.
Key: github, Value: If you have a github handle, enter it here as a string. If not, set this to null instead. */


const myArray = ['Vinicius Santana'];
myArray.push('vinicius5581');

function cutName(name) {
  return name.split(' ');
}

const myInfo = {
  fullName: 'The result of calling cutName on the name string within myArray.',
  skype: 'The Skype handle within myArray.',
}

myInfo['github'] = 'If you have a github handle, enter it here as a string. If not, set this to null instead.'
