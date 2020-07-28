// Write password to the #password input
function writePassword() {
  let keyListLower = 'abcdefghijklmnopqrstuvwxyz';
  let keyListUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let keyListNum = '0123456789';
  let keyListSpecial = "@%+/'!#$^?:.(){}[]~";
  let genPassword = '';
  let useLower = false;
  let useUpper = false;
  let useNum = false;
  let useSpecial = false;
  let charsToUse = '';

  var perPassLength = prompt("Please enter your password length - has to be > 8 but < 128 chars", 8);
  //validate length input
  if (isNaN(perPassLength)) { //check if user entered a number
    alert('Characters used must be a number!')
    return; //stops code
  }
  if (perPassLength < 8 || perPassLength > 128) { //checks if user used correct lenght
    alert('Characters used is not within the specified limits!')
    return; //stops code
  }

  //ask user if they want to use lower
  var addLowerCaseChars = confirm('Do you want to use lowercase characters?  OK= Yes, Cancel=No');
  if (addLowerCaseChars) {
    useLower = true;
  }
  //ask user if they want to use Upper
  var addUpperCaseChars = confirm('Do you want to use uppercase characters?  OK= Yes, Cancel=No');
  if (addUpperCaseChars) {
    useUpper = true;
  }
  //ask user if they want to use Number
  var addNumbers = confirm('Do you want to include numbers?  OK= Yes, Cancel=No');
  if (addNumbers) {
    useNum = true;
  }
  //ask user if they want to use special chars
  var addSpecialChars = confirm('Do you want to include special characters?  OK= Yes, Cancel=No');
  if (addSpecialChars) {
    useSpecial = true;
  }

  if (useLower == false && useUpper == false && useNum == false && useSpecial == false) {
    alert("Must select a parameter to generate a password");
    return;
  }

  if (useLower) {
    charsToUse += keyListLower;
  }
  if (useUpper) {
    charsToUse += keyListUpper;
  }
  if (useNum) {
    charsToUse += keyListNum;
  }
  if (useSpecial) {
    charsToUse += keyListSpecial;
  }

  for (i = 0; i < perPassLength; i++) {
    genPassword += charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
  }

  document.getElementById("password").placeholder = genPassword;
}

function copyText(){
  //document.getElementById("password").select();
  //document.execCommand('copy');
 
    document.getElementById("password").select();

}
//***********EVENT LISTENERS ****************************************************
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);

document.getElementById("copyTxt").addEventListener("click", copyText);