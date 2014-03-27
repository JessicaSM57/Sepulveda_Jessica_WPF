//Functions_Industry
//Profitability of a free-lance project in Web Developement
//Formula: revenue = 1 - (cost / budget)

//Set up variables that will be used in rest of code. Then set up "if else" to check validity of values entered.
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

//Set up a variable to catch the return value from the function.
var revenuePercent = calcProfit(hours, perHour, other, revenue);

//Set up if else if statement using 2 logical operators.
if(revenuePercent >= 50){
    console.log("Your profitability will be " + revenuePercent + "%. Your business is growing!");
}else if (revenuePercent <= 49 && revenuePercent >= 45){
    console.log("Your profitability will be " + revenuePercent + "%. You are still afloat -- keep pushing forward.")
}else{
    console.log("Your profitability will be " + revenuePercent + "%. You are not making enough profit.")
}

//Use a function to calculate how much profit will be made.
function calcProfit (hours1, perHour2 , other3, revenue4){ //Four parameters are established.
    var profit = Math.round((1 - (((hours1 * perHour2) + Number(other3)) / revenue4)) * 100); //Calculation includes 3 arithmetic operators.
    return profit;
}