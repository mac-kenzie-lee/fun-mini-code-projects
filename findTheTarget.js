//I wanted to find a solution to the HackReactor code function prompt, and I wanted to share my thoughts on the solution.
//this function takes in an array of integers and a target number. The goal is to find which pair of numbers sum up to the target number (if any);
//I used an inner and outer loop, counting upwards and downwards to avoid collisions.

function findPairForSum(integers, target) {
  //an array of integers
  //two pairs in array which added equal the target;
  var sum = 0;
  var sumArr = [];
 
  //loop over the length of the array 
  //check every  number and see if added to every other number--if we get the target
  //inner loop and outer loop
  for (var i = 0; i <= integers.length - 1; i++) { //first loop checks the first number
    for (var j = integers.length - 1; j >= 0; j--)
      {
        sum = (i + j);
        if (sum === target) {
          sumArr.push(i);
          sumArr.push(j);
          return sumArr;
        }
      }
  }
  return sumArr;
}

