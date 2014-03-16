//Conditional Logic -- else if
//Choosing between three or more blocks of code
//if ALWAYS requires a condition

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //print out you can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //print out you can ride with a parent present
   console.log("You can ride, but only with a parent present.");
}else{
    console.log("Sorry kid, you've got some growing to do first!");
}