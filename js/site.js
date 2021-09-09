
function getString() {  

    let inputString = document.getElementById ("inputString").value;

            inputString = inputString
                 .replace(/[^\w\s+]|_/g, "")
                 .replace(/\s+/g, "").toLowerCase();
    
                   

    let x = reverseString(inputString)

  tacoCat(inputString, x) 
}
 
function reverseString(userString){

        let revString = [];

  for (let index = userString.length - 1 ; index >= 0; index--) {

         revString += userString[index];  
}


    return revString;

}

function tacoCat(inputString, reverseString) {

      if (inputString === reverseString) {
        document.getElementById("msg").innerHTML = `Congratulations, this is a palindrome!!!`;
    } else {
        document.getElementById("msg").innerHTML = `Sorry, this is not a palindrome`;
    }
        document.getElementById("alert").classList.remove("invisible");
   
}