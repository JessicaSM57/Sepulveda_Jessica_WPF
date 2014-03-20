//Jessica Sepulveda -- 03/18/14 -- Conditionals Assignment

//Industry: Academic Probation, Warning, or Good Standing
//Given: Minimum GPA requirement is 2.0
//Pace = Cumulative number of hours (credit hours) that you have successfully completed divided by cumulative number of hours (credit hours) that you have attempted.

//Set up variables that will be used in calculations and conditional statements.

var gpa = prompt("What is your current Grade Point Average (GPA)?"); //User inputs their current GPA.
if(gpa == ""){ //Validates that an entry was made by checking if prompt was left blank.
    gpa = prompt("Please enter your GPA."); //Prompts user for information again.
}
