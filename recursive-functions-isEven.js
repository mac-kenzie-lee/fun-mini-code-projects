//this function uses recursion to check if the value of a number is even; If the number is even then "true" will be returned
//due to overflow this version only supports numbers less than 10000 and greaters than -1000;
//This function does not make use of the modulus operator;

function isEven(number) {
    //This checks for a valid number;
    if (typeof(number) !== "number") {
    return "Please provide a valid number";
    }
    //This checks the size of the number range
    if (number >= 10000) {
      return "That number is too big!"; 
    }
    if (number < -1000) {
        return "That number is too small!";
    }
    //This finds the absolute value of a number
	  number = Math.abs(number);
    
    //This checks if the initial number value is 0;
  	if (number === 0) {
    return true; 
    }
    //this returns false if a number is odd;
  	else if (number < 2 && number !== 0) {
    return false;
    }
    //this introduces recursion into the function and will continually minus 2 until the number 2 is passed in value;
	  else if (number > 1) {
    return isEven(number - 2);
    }
}
