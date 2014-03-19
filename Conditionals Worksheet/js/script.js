// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet


//Movie Ticket Price
//Given: Time of Movie in whole numbers
//Age of customer

//Set up variables that will be used in calculations.
var regularPrice = "12.00";
var age = prompt("How old are you?");
var ageDiscount = "7.00";
var matineePrice = "7.00"; // 3pm to 5pm
var time = prompt("What time is it?");

//If person is equal to or more than 65 years old AND if person is equal to or less than 11 years old; then they will get the age discount.
if(age >= 65 || age <=11){
    console.log("The ticket price is $" + ageDiscount + ".");

//If time is between equal or greater than 3 AND equal to or less than 5; then they will get the matinee price.
}else if(time >= 3 && time <= 5){
    console.log("The ticket price is $" + matineePrice + ".");

//If neither of the above codes apply, then the person pays the regular price.
}else{
    console.log("The ticket price is $" + regularPrice + ".");
}