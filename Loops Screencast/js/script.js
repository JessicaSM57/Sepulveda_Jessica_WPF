console.log ('--- Loops---');

var b = 50; // sets up the index

// You can replace "if" for "while" to create a loop.
while (b > 0){ // checks the condition
    console.log(b + ' kegs on the wall');
    b--; //increments or decrements the index
}

console.log('---Do While Loops---');

var c = 10;
do{
    console.log(c + ' kegs on the wall');
    c--;
}
while(c > 0); //Do the code above as long as (while) this code is true.

console.log('---For Loops---/');

//Short hand and preferred notation for loops.
for (var i = 10; i > 0; i--){
    console.log(i + ' kegs on the wall');
}