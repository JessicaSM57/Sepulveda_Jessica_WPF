//Conditional Logic -- Ternary Operators

var gpa = 1.3;

//if the gpa is over the min 2.0 score, the student can graduate
/*if(gpa > 2.0){
    console.log("You can graduate!");
//}else{
    consoloe.log("GPA is too low!");
}*/

//built the above in ternary form
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");