//Jessica Sepulveda -- 3/1/14 -- Expressions Worksheet

//Slice of Pie part II
var pizzaPies = 4;
var pieSlices = 8;
var partyGuests = 10;
var slicesPer = pizzaPies * pieSlices/partyGuests; //Find out how many pizza slices each guest can eat.
var totalSlices = pizzaPies * pieSlices; //Find out how many slices there are total.
var remainder = totalSlices % partyGuests; //Calculates the remainder using the module operator.
console.log("Sparky got " + remainder + " slices of pizza."); //Prints out how many slices of pizza each person can eat.