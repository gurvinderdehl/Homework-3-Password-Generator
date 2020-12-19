
let generateBtn = document.getElementById("generate");
// Creating an array of characters. 
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericChar = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

// Creating the function. 
function buttonClicked() {
    // Asking the user the character length they would like their password to be.
    var length = parseInt(prompt("What character length do you want your password to be? please choose between 8 and 128 characters."));
    if (length < 8) {
        alert("Your password must have minimum of 8 characters and a maxiumum of 128 characters.");
        return;
    }
    else if (length > 128) {
        alert("Your password must have minimum of 8 characters and a maxiumum of 128 characters.");
        return;
    }