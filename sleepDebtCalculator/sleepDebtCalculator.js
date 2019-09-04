/* Sleep Debt Calculator
Calculate if you’re getting enough sleep each week.

Objective: We are going to write a calculator that calculates sleep debt. 
The program will get how many hours of sleep is ideal each night, 
then compare that to the actual hours you slept each night of the last week.

Then, it will calculate the amount of hours over or under they are to their sleep goal. */



const getSleepHours = day => {
  
    switch(day) {
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 7;
        break;
      case 'Wednesday':
        return 7;
        break;
      case 'Thursday':
        return 8;
        break;
      case 'Friday':
        return 6;
        break;
      case 'Saturday':
        return 9;
        break;
      case 'Sunday':
        return 10;
        break;
      default:
        return "Sorry! I don't recognize that day.";
    }
  }
  
  const getActualSleepHours = () => {
    const actualSleepHours = getSleepHours('Monday') + getSleepHours('Tuesday') 
    + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') 
    + getSleepHours('Saturday') + getSleepHours('Sunday');
    return actualSleepHours
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours === idealSleepHours){
      return "You've got the perfect amount of sleep!"
    }
    
    if(actualSleepHours > idealSleepHours){
      return "You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed."
    }
    
    if(actualSleepHours < idealSleepHours){
      return "You slept " + (idealSleepHours - actualSleepHours) + " hour, get some rest."
    }
  
  }
  
  
  console.log(calculateSleepDebt());
  
  
  
  
  
  
  