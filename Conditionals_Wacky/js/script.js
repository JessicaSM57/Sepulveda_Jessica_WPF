//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Wacky: How much wood would a woodchuck chuck if a woodchuck could chuck wood?
//Given: An adult woodchuck can chuck 1 log of wood per 1 minute.
//Given: Woodchuck average lifespan is 5 years; woodchucks under 1 year old and over 4 years old can chuck only half a log of wood per 1 minute.

//Find out the age of the woodchuck.
var howOld = prompt("How old is the woodchuck?")
//NEED VALIDATION

//Find out how much time will be allotted.
var time = prompt("Enter the amount of time in minutes.");
//NEED VALIDATION


//If woodchuck is 4 years old or older, AND if woodchuck is 1 year old or younger
if(howOld >= 4 || howOld <= 1){
    console.log("A " + howOld + "year old woodchuck can chuck " + + "logs of wood in " + time + " minutes."); //The woodchuck can only chuck wood at a half rate.
}