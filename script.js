//Created by: Mate' Tanczos
//Homework #3
//Create Date: Tuesday, ‎July ‎28, ‎2020, ‏‎12:14:05 PM
// set key vars, and initialize vars
function writePassword() {
  let keyListLower = ['abcdefghijklmnopqrstuvwxyz'];
  let keyListUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  let keyListNum = ['0123456789'];
  let keyListSpecial = ['!@#$%^&*'];
  let genPassword = '';
  let useLower = false;
  let useUpper = false;
  let useNum = false;
  let useSpecial = false;
  let charsToUse = '';

//look at passWordLength ID to get what user entered in for the length of the password
  perPassLength = document.getElementById("passWordLength").value

  //validate length input
  if (isNaN(perPassLength)) { //check if user entered a number, if not alert msg and stop the code from running
    alert('Characters used must be a number!')
    return; //stops code
  }
  if (perPassLength < 8 || perPassLength > 128) { //checks if user used correct length, if its outside the range then show alert and stop the code
    alert('Characters used is not within the specified limits!')
    return; //stops code
  }

  //see if checkbox is checked for #lowerCase
  if (document.getElementById("lowerCase").checked) {
    useLower = true;
    charsToUse += keyListLower; //add all lower case letters to charsToUse var
  }

  //see if checkbox is checked for #upperCase
  if (document.getElementById("upperCase").checked) {
    useUpper = true;
    charsToUse += keyListUpper; //add all upper case letters to charsToUse var
  }

   //see if checkbox is checked for #numbers
  if (document.getElementById("numbers").checked) {
    useNum = true;
    charsToUse += keyListNum; //add all numbers to charsToUse var
  }

   //see if checkbox is checked for #specialChars
  if (document.getElementById("specialChars").checked) {
    useSpecial = true;
    charsToUse += keyListSpecial; //add all special chars available to charsToUse var
  }

  //check if user has checked any of the checkboxes, if not alert user and stop the code
  if (useLower == false && useUpper == false && useNum == false && useSpecial == false) {
    alert("Must select a parameter to generate a password");
    return;
  }

  //using the length of the password lenght set loop count
  for (i = 0; i < perPassLength; i++) {
    //The charAt() method returns the character at the specified index in a string.
    //using the length of the combantions of lower, upper, number or special chars to get the random pick for ech time to for loop is excuted
    //using the var genPassword to hold the random pick
    genPassword += charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
  }

  //once the loop is done display the password in the #password ID field
  document.getElementById("password").value = genPassword;
}

//this function is use to copy the the #password field and copy it to the clipboard
function copyToClipboard() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert(`Copied the text:  ${copyText.value} to the clipboard`);
}

//***********EVENT LISTENERS ****************************************************
// Event listener for gen password , and copy to clipboard button
document.getElementById("generate").addEventListener("click", writePassword);
document.getElementById("copyTxt").addEventListener("click", copyToClipboard);