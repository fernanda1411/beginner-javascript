/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */

for (let n = 1; n <= 100; n++) {
  const isDivisibleBy3 = n % 3 === 0;
  const isDivisibleBy5 = n % 5 === 0;
  if (isDivisibleBy3 && isDivisibleBy5) {
    console.log('FizzBuzz');
  } else if (isDivisibleBy3) {
    console.log('Fizz');
  } else if (isDivisibleBy5) {
    console.log('Bizz');
  }
}
