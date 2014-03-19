//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Personal: Fun Run
//Given: Amount raised is incrementally increased by 10% for each 10 minutes that child runs. Max time to run allotted is 30 minutes.
//Given:

//Set up variables that will be used in calculations.

var amount = prompt("How much money did you raise?");
    //Validate that an entry is made:
    if(amount == ""){
    amount = prompt("You did not enter a number. Please enter amount a whole numeric value.");
    }

var time = prompt("How long did you run?");
    //Validate that an entry is made:
    if(time == ""){
    time = prompt("You did not enter a number. Please enter minutes in a whole numeric value.");
    }

//Set up conditions to be applied
if(time >= 11 && time <= 20){
    console.log("You ran for " + time + " minutes so we matched 20% of what you raised for a total of $" + (amount * 1.2) + " . Awesome job!");
}else if(time >= 10 && time <= 19){
    console.log("You ran for " + time + " minutes so we matched 10% of what you raised for a total of $" + (amount * 1.1) + " . Great job!");
}else{
    console.log("You ran for " + time + " minutes so you raised $" + amount + " . Try harder next year!");
}

prize = (amount >= 100 ? "trophy" : "medal");
    console.log("You earned a " + prize +".");