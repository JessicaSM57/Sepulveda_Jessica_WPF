//Jessica Sepulveda -- March 12, 2014 -- Assignment: Expressions

//Wacky: How much food will my dogs consume in their lifetime?

//Create prompt in an array format in order to establish age weight, life expectancy, and names.
var questions = [prompt("How much do your dog(s) weigh cumulatively in pounds?"), prompt("What is your dog(s) remaining life expectancy in years?"), prompt("What are your dog's names?")]; //This is an array.

//Given that a 40 pound dog consumes 24 ounces of food per day the following equation is established:
var dailyFood = (Number(questions[0]) / 40) * 24; //Example: 2 pound dog / 40 pound dog * 24 ounces = 1.2 ounces of food per day


//Using life expectancy entered, this expression converts years to days and then multiplies dailyFood and finally converts to pounds.
//var answer = Number(questions[1]) * 365 * dailyFood / 16; //Example: 2 years of life expectancy for a 2 pound dog =
    console.log(dailyFood);
