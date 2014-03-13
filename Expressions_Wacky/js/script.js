//Jessica Sepulveda -- March 12, 2014 -- Assignment: Expressions

//Wacky: How much food will my dog consume in its lifetime?

//Create prompt in an array format in order to establish age weight, life expectancy, and names.
var questions = [prompt("How much does your dog weigh in pounds?"), prompt("What is your dog's remaining life expectancy in years?"), prompt("What is your dog's name?")]; //This is an array that will combine numeric and text data.

//Given that a 40 pound dog consumes 24 ounces of food per day the following equation is established:
var dailyFood = Number(questions[0]) / 40 * 24; //Example: 2 pound dog / 40 pound dog * 24 ounces = 1.2 ounces of food per day

//Using life expectancy entered, this expression converts years to days and then multiplies dailyFood and finally converts to pounds.
var answer = Number(questions[1]) * 365 * dailyFood / 16; //Example: 2 years of life expectancy * 365 days in 1 year * 1.2 ounces / 16 ounces in one pound = 54.75 pounds of food in dog's lifetime
    console.log(questions[2] + " will consume approximately " + answer + " pounds of food in his/her lifetime."); //Prints results to console while stringing text and data.