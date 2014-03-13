//Jessica Sepulveda -- 3/1/14 -- Expressions Worksheet

//Discounts

var itemDesc = ["jacket"]; //Item is given and described.
var originalPrice = 157.99; //Original price of item is given and specified.
var discountPercentage = ["25%"]; //Discount percentage is given and specified.
var discount = 25/100; //Discount percentage is converted for mathematical processing.
var discountedPrice = originalPrice-originalPrice*discount; //Built expression for discounted price of item: 157.99-39.4975=118.4925
var salesTax = .0825; //Sales tax is given.
var afterTax = salesTax*discountedPrice+discountedPrice; //Built expression for discounted price of item after tax: 118.4925*.0825=9.7756 ; 9.7756+118.4925=128.2681
console.log("Your " + itemDesc + " was originally $" + originalPrice + ", but after a discount of " + discountPercentage + ", it is now $" + discountedPrice + " without tax, and $" + afterTax + " with tax.");

