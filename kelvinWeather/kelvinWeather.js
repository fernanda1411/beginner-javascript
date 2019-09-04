/* Kelvin Weather
The mad scientist Kelvin has mastered predicting the weather in his mountain-side meteorology lab.
Recently, Kelvin began publishing his weather forecasts on his website, however there’s a problem: 
All of his forecasts describe the temperature in Kelvin degrees.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. */


var kelvin = 293;
var celsius = kelvin - 273;
var fahrenheit = celsius * (9/5) + 32;

console.log('The temperature is ' + fahrenheit + ' fahrenheit.');