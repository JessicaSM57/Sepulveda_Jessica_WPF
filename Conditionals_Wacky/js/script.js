//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Wacky: How much wood would a woodchuck chuck if a woodchuck could chuck wood?
//Given: An adult woodchuck can chuck 2 logs of wood per 1 minute.
//Given: Woodchuck average lifespan is 5 years; woodchucks under 1 year old and over 4 years old can chuck only half a log of wood per 1 minute.

//Find out the age of the woodchuck.
var howOld = prompt("How old is the woodchuck?");
//NEED VALIDATION

//Find out how much time will be allotted.
var time = prompt("Enter the amount of time in minutes.");
//NEED VALIDATION

//Set up calculations for >= 4 AND <=1 assuming a woodchuck can only chuck wood at a half rate when these two conditions are met.
var regRate = 2 * time;
//var halfRate = 1 * time;

//If woodchuck is 4 years old or older, AND if woodchuck is 1 year old or younger; then woodchuck follows halfRate
if(howOld >= 4 || howOld <= 1){
    console.log("A " + howOld + "year old woodchuck can chuck " + .5 * regRate + "logs of wood in " + time + " minutes.");

//Otherwise if first conditions are not true, then woodchuck follows regRate:
}else{
    console.log("A " + howOld + "year old woodchuck can chuck " + regRate + "logs of wood in " + time + " minutes.");
}