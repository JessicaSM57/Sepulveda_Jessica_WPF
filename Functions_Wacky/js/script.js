//Functions_Wacky
//Quiz: Will I like you as a friend?

//Create an array to collect information. Given: "Yes" for all of the items will yield 100% results.
var quiz = [prompt("For all prompts, type in yes or no. /br/ Do you like sci-fi movies?"), prompt("Do you like to read?"), prompt("Do you like to go hiking?"), prompt("Did you finish college?"), prompt("Do you like stories or movies about zombies?"), prompt("Do you have any kids?"), prompt("Have you heard of Battlestar Galactica?"), prompt("Are you currently employed?")];
console.log(quiz);



function likeAbility(answers){
    console.log(answers[2]);
    var numYes = 0;
    for(var agree = 0; agree < answers.length; agree++){
        if(answers[agree] == "yes"){
            numYes++;
        }

    }
    console.log("Inside function" + numYes);
    return(numYes);
}
