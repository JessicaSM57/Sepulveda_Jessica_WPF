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