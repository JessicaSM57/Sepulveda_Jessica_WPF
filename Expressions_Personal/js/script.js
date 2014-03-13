//Jessica Sepulveda -- March 12, 2014 -- Assignment: Expressions

//Personal: Are I spending money frivolously?

//Create prompt to establish givens and introduce data collection:
var income = prompt("According to NoMoreDebts.org, you should only spend 5% of your income on eating out, entertainment, and other discretionary expenses. \nPlease enter your adjusted monthly income for February.");


//Collect information from user:
var eatingOut = prompt("How much did you spend on eating out in February?");
var entertain = prompt("How much money did you spend on entertainment in February?");
var other = prompt("How much did you spend on other items including alcohol, gaming, hair cuts, hobbies, and recreation?");

//Create an equation that answers the question posed.
var totalLeft = income - eatingOut - entertain - other; //Used subtraction instead of addition due to unresolvable complication with getting numbers to identify as digits versus text when using addition.
var totalSpent = income - totalLeft; //Extra step needed due to using subtraction instead of addition.
var dif = totalSpent / income * 100 - 5; //Calculates percentage spent frivolously and compares it to the recommendation.

//Set up the detailed answer the detailed answer in console, but it can be easily changed to alert mode.
console.log("You spent $" + totalSpent + " on frivolous items in February; which is " + dif + "% more than the 5% recommended.");