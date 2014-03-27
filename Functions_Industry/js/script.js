//Functions_Industry
//Profitability of a free-lance project in Web Developement
//Formula: revenue = 1 - (cost / budget)

//Set up variables that will be used in rest of code. Then set up "if else" to check values entered.
var hours = prompt("Enter hours worked.");
//Set up conditional to check if this was answered.
if(hours == "" || hours != Number(hours)){
    prompt("You did not enter a numeric value. Please enter the amount of hours worked.")
}else{
    alert("You entered " + hours + " hours.")
}
var perHour = prompt("Enter contracted rate per hour.");
if(perHour == "" || perHour != Number(perHour)){
    prompt("You did not enter a numeric value. Please enter the hourly rate for labor.")
}else{
    alert("You entered $" + perHour + " per hour.")
}
var other = prompt("Enter total for all other project costs. (i.e. travel)");
if(other == "" || other != Number(other)){
    prompt("You did not enter a numeric value. Please enter all other total project costs.")
}else{
    alert("You entered $" + other + " in total other costs.")
}
var revenue = prompt("Enter total project revenue.");
if(revenue == "" || revenue != Number(revenue)){
    prompt("You did not enter a numeric value. Please enter the total revenue received for the project.")
}else{
    alert("You entered $" + revenue + " total project revenue.")
}
