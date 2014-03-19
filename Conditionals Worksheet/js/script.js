// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet

//Celsius to Fahrenheit converter

//Set up prompts as an array to collect 2 different pieces of information, numeric and alpha.
var temp= [Number(prompt("Type in the numeric value of the temperature (i.e. 32).")), prompt("Type in capital F for Fahrenheit or capital C for Celsius.")];

//Set up temperature conversion calculations.
var fToC = (temp[0] - 32) * 5 / 9;
var cToF = temp[0] * 9 / 5 + 32;

//If value entered for second prompt equals capital F, then:
if(temp[1] == "F"){
    console.log("The temperature is " + fToC + " degrees Celsius.");

//If value entered is NOT capital F then:
}else{
    console.log("The temperature is " +cToF+ " degrees Fahrenheit.");
}

//NOTES: Code would be more elegant if user could enter numeric+alpha value "32F" or "32f" and the values be separated and parsed correctly.