//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Personal: Fun Run
//Given: Amount raised is matched by 10% for each 10 minutes that child runs. Max time to run allotted is 30 minutes.

//Set up variables that will be used in calculations.

var amount = prompt("How much money did you raise?");
    //Validate that an entry is made:
    if(amount == ""){
    amount = prompt("You did not enter a number. Please enter amount a whole numeric value.")
    }

var match = prompt("How long did you run?");
    //Validate that an entry is made:
    if(match == ""){
    match = prompt("You did not enter a number. Please enter minutes in a whole numeric value.")
    }



//Ternary at end: prize = (totalRaised >= 100 ? "trophy" : "medal");
