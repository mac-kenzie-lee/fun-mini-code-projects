//Finds the absolute value of a number
//An absolute number is the distance from the origin (zero)

/*We can calculate it by adding it's opposite.
    Since a computer doesn't have eyes we will have
    to check to see if the number is greater than zero
    or less than zero. */
function absFinder(number) {
    //function declaration, taking in one number.

    //if number is 0
    if (number === 0) {
        return 0;
    }
    //if number is negative condition
    if (number < 0) {
        return number * -1;
    }
    //add the opposite of the number
    else {
        return number;
    }
    //returns number.
    //if number is positive condition
    //we have the absolute value, but can consider how far it is from the origin.

    //returns number.
}