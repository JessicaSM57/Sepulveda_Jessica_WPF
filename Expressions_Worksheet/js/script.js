//Jessica Sepulveda -- 3/1/14 -- Expressions Worksheet

//Total Amount spent on groceries

var subTotals = [80,90,70,65,57];  // Five weekly grocery totals
var totalSum = subTotals[0] + subTotals[1] + subTotals[2] + subTotals[3] + subTotals[4]; //Use array to add up total.
var average = totalSum/5; //Find out average by dividing by total number of items in array.
console.log("You have spent a total of $" + totalSum + " on groceries over 5 weeks. That is an average of $" + average + " per week."); //Prints grand total and average.
