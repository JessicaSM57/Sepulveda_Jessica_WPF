// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet

//Stuff your face I
//Qualifying weight for heavyweight division of contest?

var weight = prompt("Please enter your weight."); //Participant must be 250 pounds minimum to qualify

if(weight >= 250){//Person must be 250 pounds or more to qualify
    console.log("The competitor qualifies for the heavyweight division."); //Prints if this condition is met
}else{ //Sets up condition for result if below 250 pounds
    console.log("The competitor needs to gain some weight!"); //Prints if the condition is NOT met
}