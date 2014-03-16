//Conditional Logic -- Logical Operators

var budget = 300;
var iPhonePrice = 199.99
var paycheck = 200

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice && paycheck < 300){ //&& is for going in between relational expressions not to be used as an operator
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}
