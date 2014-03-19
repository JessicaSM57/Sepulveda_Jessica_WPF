// Jessica Sepulveda -- 03/17/14 -- Conditionals Worksheet

//Check the Login
//Correct username = student
//Correct password = pass

var userName = prompt("Please enter your username.");
var password = prompt("Please enter your password.");

if(userName == "student" && password == "pass"){
    console.log("Welcome, " + userName + "!");
}else if(userName != "student" && password == "pass"){
    console.log("User not found. Try again."); //if username does not match
}else{
    console.log("Password does not match our records.");//if username matches but the password does not
}
