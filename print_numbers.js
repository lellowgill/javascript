/**
 * 
 */

for (var input = 1; input <= 10; input++) {
    console.log(input);
   }

   //Decrement the for loop see below
   //for (var i = 0; i > -3; i--) {} this is how to decrement
   //for (var i = 0; i < 50; i++) {
  //alert("Crazy yet?"); }

  /**
   * Code a loop using the usual conventions and < that tests each element of a 
   * 5-element array, answers, to see if it has the value "yes". 
   * If so, a variable, already declared, is assigned a positive, single-digit integer. 
   * Use a number, not the array length, to limit the number of loops.
   * 
   * for (var i = 0; i < 5; i++) {
  if (answers[i] === "yes") {
    positive = 1;
  }
}
   * 
   */

/**
 * Create an array with 2 number elements.
Loop through the array to test whether each of the elements
matches itself. (It will. )
Create an alert whose message is the element.
Click the Run It button to run your code live. (Two alerts should display.)
 * 
 * 
 * var nums = [1, 2];
for (var i = 0; i < 2; i++) {
  if (nums[i] === nums[i]) {
    alert(nums[i]);
  }
}
 */

/**
 * Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if (matchFound === false) {
  alert("Match not found");
}

 * In 3 statements, assign a number to a variable that's already been declared, 
assign a Boolean (either one) to a flag that's already been declared, 
and interrupt a loop. 
Don't indent any of the lines.
 * 
x = 1;
found = true; (or false;)
break;

Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if (matchFound === false) {
  alert("Match not found");
}

 */

/**
 * Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should be 1.)
Break out of the loop
Click the Run It
 * for (var i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}
 */

/**
 * Code the first line of a for loop with the usual counter, 
 * the usual starting value, and the usual incrementing. 
 * Limit the number of loops by the number of elements in the arrays.
 * 
 * for (var i = 0; i < pets.length; i++) {

 */