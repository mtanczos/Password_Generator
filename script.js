// Write password to the #password input
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


  perPassLength = document.getElementById("passWordLength").value

  //var perPassLength = prompt("Please enter your password length - has to be > 8 but < 128 chars", 8);
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
  if (document.getElementById("lowerCase").checked) {
    useLower = true;
  }

  //ask user if they want to use Upper
  if (document.getElementById("upperCase").checked) {
    useUpper = true;
  }

  //ask user if they want to use Number
  if (document.getElementById("numbers").checked) {
    useNum = true;
  }

  //ask user if they want to use special chars
  if (document.getElementById("specialChars").checked) {
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

  document.getElementById("password").value = genPassword;
}

function copyToClipboard() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert(`Copied the text:  ${copyText.value} to the clipboard`);
}

//***********EVENT LISTENERS ****************************************************
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
document.getElementById("copyTxt").addEventListener("click", copyToClipboard);