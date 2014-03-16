//Conditional Logic -- Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

// OR operator states that as long as one of these things is true then the whole thing is going to be true; if we win the lottery then it doesnt matter what the budget is going to be; the OR operator only needs 1 of these to be true in order for the whole thing to be true
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}
