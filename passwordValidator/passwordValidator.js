/* Password Validator
We are going to write a program to make sure that a password is complex so that it cannot be easily guessed. 
Our password validator will check multiple aspects of a potential password and will report back to the user 
if their password meets a set of rules.

The rules for our password validator are:

Has at least one uppercase letter
Has at least one lowercase letter
Is at least 8 characters long
Has at least one special character
We can utilize functions to check for each of these requirements, 
then create a function to validate a user’s password.*/



function isPasswordValid(input){
    if(!hasUpperCase(input)){
     console.log('The password needs a capital letter!');
   }
   
     if(!hasLowercase(input)){
     console.log('The password needs a lowercase letter!');
   }
   
     if(!isLongEnough(input)){
     console.log('Needs more than 7 characters!');
   }
   
     if(!hasSpecialCharacter(input)){
     console.log('Needs 1 special character!');
   }
   
   if(hasUpperCase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)){
     console.log('The password is valid.');
   }  
 }
 
 function hasLowercase(input){
   for(var i = 0; i < input.length; i++){
     if(input[i] === input[i].toLowerCase()){
       return true;
     }
   }
 }
 
 function isLongEnough(input){
   if(input.length >= 8){
     return true;
   }
       return false;
 }
 
 function hasUpperCase(input){
   for(let i = 0; i < input.length; i++){
     if(input[i] === input[i].toUpperCase()) {
       return true;
     }
   }
   return false;
 }
 
 function hasSpecialCharacter(input){
   var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
   
   for(let i = 0; i < input.length; i++){
     for(let j = 0; j < specialCharacters.length; j++){
       if(input[i] === specialCharacters[j]){
         return true;
       }
     }
   }
   return false;
 }
 
 isPasswordValid('fernanda!');