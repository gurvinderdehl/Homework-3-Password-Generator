
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

    // Creating Prompts for the user to define what kind of characters they would like 
    var confirmNumeric = confirm("Do you want your password to contain numbers?");
    var confirmUpperCase = confirm("Do You want your password to contain Capital Letters?");
    var confirmLowerCase = confirm("Do you want your password to contain Lowercase Letters?");
    var confirmSpecialChar = confirm("Do you wnat your password to contain special characters?");
    if (!confirmSpecialChar && !confirmLowerCase && !confirmUpperCase && !confirmNumeric) {
        alert("Your password must include at least one number, one Capital Letter, one Lowercase Letter and one Special character.");
        return;
    }

    //Creating a variable to hold all the options
    var characterChoices = {
        length : length,
        specialCharacters: confirmSpecialChar,
        lowerCaseCharacters: confirmLowerCase,
        uppercaseCharacters: confirmUpperCase,
        numericCharacters: confirmNumeric
    }
    return characterChoices;
}