// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet


//Movie Ticket Price
//Given: Time of Movie in whole numbers
//Age of customer

var regularPrice = "12.00";
var age = prompt("How old are you?");
var ageDiscount = "7.00";
var matineePrice = "7.00"; // 3pm to 5pm
var time = prompt("What time is it?");

if(age >= 65 || age <=11){
    console.log(ageDiscount);
}else if(time >= 3 && time <= 5){
    console.log("The ticket price is $" + matineePrice + ".");
}else{
    console.log("The ticket price is $" + regularPrice + ".");
}