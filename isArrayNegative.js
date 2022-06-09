//the purpose of this function is to determine if an array of numbers, when multiplied together would return a negative or positive number.

function ifArrayMultipliedIsPositive(arrayOfNumbers) {
    //declare a function taking in an array parameter
    var counter = 0;
    //create a counter variable
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        //loop through the array
        if (arrayOfNumbers === 0) {
            continue;
        }
        if (arrayOfNumbers[i] < 0) {
            //check if a value is negative
            counter++;
            //if negative, add a number to a counter
        }
    }
    //after the loop
    //if the counter %  2 === 0 we can infer that we have an even number, and the number will be positive, else it will be negative since it would be counter % 2 === 1,
    if (counter % 2 === 0) {
        return 'positive';
    } else {
        return 'negative';
    }
    //we will return either the string 'positive' or 'negative'
}
