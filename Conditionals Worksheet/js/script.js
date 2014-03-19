// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet

//Celsius to Fahrenheit converter

var temp= [Number (prompt("Type in the numeric value of the temperature (i.e. 32).")), prompt("Type in capital F for Fahrenheit or capital C for Celsius.")];

var fToC = (temp[0] - 32) * 5 / 9;
var cToF = temp[0] * 9 / 5 + 32;

if(temp[1] == "F"){
    console.log("The temperature is " + fToC + " degrees Celsius.");
}else{
    console.log("The temperature is " +cToF+ " degrees Fahrenheit.");
}