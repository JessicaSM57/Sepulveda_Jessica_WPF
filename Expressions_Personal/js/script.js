//Jessica Sepulveda -- March 12, 2014 -- Assignment: Expressions

//Personal: Are I spending money frivolously?

//Create prompt to establish givens and introduce data collection:
var income = prompt("According to NoMoreDebts.org, you should only spend 5% of your income on eating out, entertainment, and other discretionary expenses. \nPlease enter your adjusted monthly income for February.");


//Collect information from user:
var eatingOut = prompt("How much did you spend on eating out in February?");
var entertain = prompt("How much money did you spend on entertainment in February?");
var other = prompt("How much did you spend on other items including alcohol, gaming, hair cuts, hobbies, and recreation?");

//Create an equation that calculates how much money you have left in the month.
var totalLeft = income - eatingOut - entertain - other;
var totalSpent = (income - totalLeft) / income;
var totalPercent = totalSpent

//Set up the alert with the answer.
//alert ("You spent $" + totalSpent + "on frivolous items in February; which is " + + "% more than the 5% recommended.");