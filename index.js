let passwordLength = document.getElementById("passwordLength").value = ""

function generatePassword() {
  passwordLength = parseInt(document.getElementById("passwordLength").value);
  pMsgPassword = document.getElementById("pMsgPassword");

  const password = createPassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  pMsgPassword.textContent = password;
}

function createPassword(
  lenght,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_-+=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (lenght <= 0 || isNaN(lenght)) {
    return `Your number is invalid!`;
  }

  if (allowedChars.length === 0) {
    return `You need select at least a set of characters!`;
  }

  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

let includeLowercase = false;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;

let checkLowercase = document.querySelector("#checkLowercase");
let checkUppercase = document.querySelector("#checkUppercase");
let checkNumbers = document.querySelector("#checkNumbers");
let checkSymbols = document.querySelector("#checkSymbols");

checkLowercase.checked = false;
checkUppercase.checked = false;
checkNumbers.checked = false;
checkSymbols.checked = false;

checkLowercase.addEventListener("change", function () {
  if (this.checked) {
    includeLowercase = true;
  } else {
    includeLowercase = false;
  }
});

checkUppercase.addEventListener("change", function () {
  if (this.checked) {
    includeUppercase = true;
  } else {
    includeUppercase = false;
  }
});

checkNumbers.addEventListener("change", function () {
  if (this.checked) {
    includeNumbers = true;
  } else {
    includeNumbers = false;
  }
});

checkSymbols.addEventListener("change", function () {
  if (this.checked) {
    includeSymbols = true;
  } else {
    includeSymbols = false;
  }
});
