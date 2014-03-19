// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet

//Check the Login
//Correct username = student
//Correct password = pass

//Set up variables to prompt for givens.
var userName = prompt("Please enter your username.");
var password = prompt("Please enter your password.");

//If user enters correct username and password, then they will see welcome in console.
if(userName == "student" && password == "pass"){
    console.log("Welcome, " + userName + "!");

//If user does not enter correct username AND enters correct password then they will get this prompt.
}else if(userName != "student" && password == "pass"){
    console.log("User not found. Try again."); //if username does not match

//If user enters correct username but incorrect password, they get this prompt:
}else{
    console.log("Password does not match our records.");//if username matches but the password does not
}
