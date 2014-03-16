//Conditional Logic -- else if
//Choosing between three or more blocks of code
//if ALWAYS requires a condition but else NEVER should have a condition

var kidHeight = 52;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    //code performed if condition is false
   console.log("Sorry kid, you've got some growing to do first!");
}