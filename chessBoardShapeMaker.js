/*this function allows the user to specify a size and creates a shape like a chessboard
to make the size given, you can input a one character string for the shape to see an image printed with your desired shape. */
//this function only gives out side affects and doesn't return any values --it's purpose is to be scalable ascii art;

function chessBoardShapeMaker(size, shape) {
  //this empty variable is the template for what we will be printing, we will append the shapes and spaces to this string
  let empty = '';

  for (let i = 0; i <= size; i++) {
    //this for loop does the action of printing the rows on the board
    console.log(`${empty}\n`);

    //empty is reverted back to an empty string to clear out the shape history from prior iterations
    empty = '';

    for (let j = 0; j <= size; j++)
      //this for loop controls the string output for the rows

      //the first if statement checks to see if the particular index to be iterated over calculates as even and adds the negative shape to the row
      if ((i + j) % 2 === 0 && j < size) {
        empty += ' ';
      } else if ((i + j) % 2 !== 0 && j < size) {
        //this secondary statement checks if the indexes are odd and adds the positive shape to the row
        empty += shape;
      }
  }
}
