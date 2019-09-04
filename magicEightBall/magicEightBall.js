/* Magic Eight Ball
We will build a Magic Eight Ball with JavaScript.*/



var userQuestion = 'How old are you?';
var randomNumber = Math.floor(Math.random()*7);
var eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
  break;
  case 1:
    eightBall = 'It is decidedly so';
  break;
  case 2:
    eightBall = 'Reply hazy try again';
  break;
  case 3:
    eightBall = 'Cannot predict now';
  break;
  case 4:
    eightBall = 'Dont count on it';
  break;
  case 5:
    eightBall = 'My sources say no';
  break;
  case 6:
    eightBall = 'Outlook not so good';
  break;
  case 7:
    eightBall = 'Signs point to yes';
  break;
    console.log('The user asked: ' + userQuestion);
    console.log('The eight ball answered: ' +eightBall);
}