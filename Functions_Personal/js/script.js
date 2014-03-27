//How many calories will I burn?
//Women: Calories Burned = ((Age x 0.074) - (Weight x 0.05741) + (Heart Rate x 0.4472) - 20.4022) x Time / 4.184 (Source: http://fitnowtraining.com/2012/01/formula-for-calories-burned/)

//Establish variables that will be used in rest of code by collecting information via prompts.
var age1 = prompt("How old are you?");
var weight1 = prompt("How much do you weigh?");
var heartRate1 = prompt("Enter your average heart rate during the exercise.");
var time1 = prompt("How long did you exercise?");

//Create a variable that will "catch" our return number
var total = Math.round(calcFcal(age1, weight1, heartRate1, time1)); //This is calling the function and employs the 4 arguments established above as variables.

//Set up ternary to print results to console.
burnedCals = (total > 400 ? "Congratulations! You burned " + total + " calories." : "You only burned " + total + " calories. Try harder next time."); //Used conditional operator other than equals.
console.log(burnedCals);

////Create function to calculate how many calories a woman burns.
function calcFcal(age, weight, hearRate, time){ //Four parameters are established.
    var calories = ((age * 0.074) - (weight * 0.05741) + (hearRate * 0.4472) - 20.4022) * time / 4.184; //Calculation includes at least 2 factors as variables and uses 4 arithmetic operators.
    return calories; //Saves result to be used when called.
}