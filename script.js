// define the variables
const passwordInputRange = document.getElementById("passwordInputRange");
const passwordRangeLength = document.getElementById("passwordRangeLength");
const uppercaseCheckbox = document.getElementById("uppercaseInput");
const numbersCheckbox = document.getElementById("numbersInput");
const symbolsCheckbox = document.getElementById("symbolsInput");
const passwordDisplay = document.getElementById("passwordDisplay");
const copyButton = document.getElementById("copy");
const copiedMessage = document.getElementById("copiedMessage");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[{|;:,.<>?'";
let characters = lowercaseLetters; // initialize characters with lowercase letters

const generateButton = document.getElementById("generateButton");

passwordInputRange.addEventListener("input", function() {
  passwordRangeLength.textContent = passwordInputRange.value;
});

generateButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page

  // clear the characters variable so it doesn't accumulate with repeated clicks
  characters = lowercaseLetters;

  // conditions based on user input
  if (uppercaseCheckbox.checked) {
    characters += uppercaseLetters;
  }

  if (numbersCheckbox.checked) {
    characters += numbers;
  }

  if (symbolsCheckbox.checked) {
    characters += symbols;
  }

  // loop through and generate the password
  let password = "";
  for (let i = 0; i < passwordInputRange.value; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  // display the password
  passwordDisplay.textContent = password;
});
//copy the password
copyButton.addEventListener('click', function(event){
    event.preventDefault(); // prevent the form from submitting and refreshing the page
    const password = passwordDisplay.innerText;
    if (!password) return;
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    copiedMessage.textContent = "Copied!";
    setTimeout(() => {
      copiedMessage.textContent = "";
    }, 2000);
    });
  
