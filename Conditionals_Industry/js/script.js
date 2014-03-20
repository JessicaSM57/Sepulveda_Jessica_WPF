//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Industry: Academic Probation, Warning, or Good Standing
//Given: Minimum GPA requirement is 2.0
//Pace = Cumulative number of hours (credit hours) that you have successfully completed divided by cumulative number of hours (credit hours) that you have attempted.

//Set up variables that will be used in calculations and conditional statements.

var gpa = prompt("What is your current Grade Point Average (GPA)?"); //User inputs their current GPA.
if(gpa == ""){ //Validates that an entry was made by checking if prompt was left blank.
    gpa = prompt("Please enter your GPA."); //Prompts user for information again.
}
var pass = prompt("How many classes have you completed in the last 4 months with a grade of D or better?"); //User must input #
if(pass == ""){ //Validates if field was left blank.
    pass = prompt("Answer the question. List the numeric value for the number of classes you completed with a grade of D or higher"); //prompts user again for information.
}
var pace = pass / 4 * 100; //Calculation used to produce pace and convert pace to a percentage.

//Set up conditionals:

if(gpa < 2.0 && pace < 67){ //First condition checks if GPA is below 2.0 AND pace of completion is below 67%
    console.log("You are on Academic Probation."); //Prints results to console to inform user of outcome.
}else if(gpa < 2.0 || pace < 67){ //Second condition asks if either gpa or pace are below requirements.
    console.log("You are on Academic Warning."); //Prints results to console to inform user of outcome.
}else{ //If none of the above cases is true.
    console.log("You are officially in good academic standing."); //Favorable results are printed to console.
}
//Set up ternary to determine next step. If GPA or Pace are below minimums,
advise1 = (gpa < 2.5 ? "However, you need to pull up your grades." : "Have a great day!");
console.log(advise1);

advise2 = (gpa < 2.0 || pace < 67 ? "Report to Advising immediately." : "Have a great day!");
console.log(advise2);