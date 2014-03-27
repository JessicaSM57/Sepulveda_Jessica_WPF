//Functions_Wacky
//Quiz: Will I like you as a friend?

//Create an array to collect information. Given: "Yes" for all of the items will yield 100% results.
var quiz = [prompt("For all prompts, type in yes or no. \nDo you like sci-fi movies?"), prompt("Do you like to read?"), prompt("Do you like to go hiking?"), prompt("Did you finish college?"), prompt("Do you like stories or movies about zombies?"), prompt("Do you have any kids?"), prompt("Have you heard of Battlestar Galactica?"), prompt("Are you currently employed?")];
console.log(quiz);

//Set up variable that will catch the return value from the function.
var likeYou = 0;
likeYou = likeAbility(quiz);

//Set up if else condition using 1 logical operator and 2 arithmetic operators.
if(likeYou >= 4){
    console.log("Awesome! There is a " + likeYou / 8 * 100 + "% chance that I will like you.");
}else{
    console.log("Yikes! There is only a " + likeYou /8 * 100 + "% chance that we will get along.")
}

//Used function to go through the answers from the array.
function likeAbility(answers){
    var numYes = 0; //Variable will count the number of Yes responses.
    for(var agree = 0; agree < answers.length; agree++){//Use .length to count answers; then add them up incrementally.
        if(answers[agree] == "yes"){
            numYes++;//Go through loop and count the yes answers.
        }

    }
    return(numYes);
}
