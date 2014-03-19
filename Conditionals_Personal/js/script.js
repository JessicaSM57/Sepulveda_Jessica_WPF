//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Personal: Fun Run Fundraiser
//Given: Amount raised is incrementally increased as a sponsor match by 10% for each 10 minutes that child runs. Max time to run allotted is 20 minutes.
//Given: Children who raise $100 or more are given a trophy. Everyone else receives a medal for participation.

//Set up variables that will be used in calculations.

var amount = prompt("How much money did you raise?"); //User must input amount of money raised in whole numbers.
    if(amount == ""){ //Validate that an entry is made:
    amount = prompt("No entry was made. Please enter the amount you raised as a whole numeric value (i.e. 100)."); //User is prompted again if no entry is made.
    }

var time = prompt("How long did you run?"); //User must input time in minutes.
    if(time == ""){ //Validate that an entry is made:
    time = prompt("No entry was made. Please enter minutes in a whole numeric value (i.e. 15)."); //User is prompted again if no entry is made.
    }

//Check if runner ran max time frame of 11 minutes to 20, if so then apply 20% in addition to total amount raised.
if(time >= 11 && time <= 20){
    console.log("You ran for " + time + " minutes so we matched 20% of what you raised for a total of $" + (amount * 1.2) + " . Awesome job!");////Calculates grand total to print.

//If the above is not true; then check if runner ran time frame of 10 to 19 minutes, if so then apply 10% in addition to total amount raised.
}else if(time >= 10 && time <= 19){
    console.log("You ran for " + time + " minutes so we matched 10% of what you raised for a total of $" + (amount * 1.1) + " . Great job!"); ////Calculates grand total to print.

//If neither of the above conditions are true; which means the runner's time was 9 minutes or less, then no match is made.
}else{
    console.log("You ran for " + time + " minutes so you raised $" + amount + ". Thanks for participating!"); //Calculates grand total to print.
}

//Set up ternary to determine if child met base amount criteria for a trophy or a medal.
prize = (amount >= 100 ? "trophy" : "medal");
    console.log("You earned a " + prize +"! See you next year!");