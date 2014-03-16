//Conditional Logic -- Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//
if(iPhonePrice < budget || wonLottery){ // === sign is not necessary and it is more elegant to leave it out
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}
