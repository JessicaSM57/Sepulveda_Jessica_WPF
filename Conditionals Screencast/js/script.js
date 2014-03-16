//Conditional Logic -- Ternary Operators

var age = 6;
var book;

//If the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine

book = (age < 10 ? "Green Eggs and Ham" : "The Time Machine");
//Ternary condition is able to return a value into the variable book. This is easier and more elegant than using a huge conditional statements in long form. If you're dealing with really large blocks of code, then you will want to build more traditional conditional statements. If you are dealing with simple assignment, then ternary works best.
console.log(book);