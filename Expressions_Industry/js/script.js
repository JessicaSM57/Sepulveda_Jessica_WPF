//Jessica Sepulveda -- March 13, 2014 -- Assignment: Expressions

//Professional: What is your student retention rate?

//Create prompts to introduce data collection and establish givens while setting up an array.
var questions = [prompt("How many students do you currently have?"), prompt("How many students will be graduating this month?"), prompt("How many students do you expect to withdraw this month?")];

//Create formula to calculate monthly retention rate while keeping in mind PEMDA, then multiply by 100 to get percentage.
var total = (questions[0] - questions[1] - questions[2]) / questions[0] * 100;
console.log("Your student retention rate for this month will be " + total + "%."); //Print results to console to fulfill assignment requirement although an alert would be more applicable.