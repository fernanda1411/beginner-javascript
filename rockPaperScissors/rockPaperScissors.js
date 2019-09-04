/* Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into 4 parts:

Get the user’s choice
Get the computer’s choice
Compare the two choices and determine a winner
Start the program and display the results. */




const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || 
      userInput === 'scisssors' || userInput === 'bomb' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber){
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
      }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
      return 'You destroyed your opponent! Congrats!';
    }
    if(userChoice === computerChoice){
      return "The game is a tie!";
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return "Computer Wom!";
      } else {
        "User Won!";
      }
    }
      if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return "Computer Wom!";
      } else {
        "User Won!";
      }
  }
        if(userChoice === 'scissors'){
      if(computerChoice === 'srock'){
        return "Computer Wom!";
      } else {
        "User Won!";
      }
    }
  }
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log("You choice is: " + userChoice);
    console.log("The computer choice is: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
    // console.log(determineWinner('paper', 'paper'));
    // console.log(determineWinner('rock', 'paper'));
    // console.log(determineWinner('rock', 'scissors'));
  
  