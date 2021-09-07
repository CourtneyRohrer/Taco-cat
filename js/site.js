//get value from page inputString
//starts or controller function

    function getString() {  
//get string from page
    let inputString = document.getElementById ("inputString").value;

//remove all extra characters    
     inputString = inputString.replace(/[^\w\s]|_/g, "")
                                 .replace(/\s+/g, " ");

//call reverseString
    let x = reverseString(inputString)
//call tacoCat
    tacoCat(x)
        
}

//reverse the string 
function reverseString(userString){

    let revString = [];

//Reverse a string using a for loop

for (let index = userString.length - 1 ; index >= 0; index--) {

    revString += userString[index];  
}

return revString;

}

//discover if the string is a palindrome
//logic function

function tacoCat() {
    //check if inputString and reverseString are the same and display a message for both options

    if (inputString === reverseString) {
        document.write ("Congratulations, this is a palindrome!!!");
    } else {
        document.write ("Sorry, this is not a palindrome");
    }
    
}

//display the results with a message stating whether it is a palindrome or not 
//view function