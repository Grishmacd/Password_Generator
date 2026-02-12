// Import inquirer package to take input from the user in terminal
import inquirer from "inquirer";

// Import fs (File System) module to create/write files
import fs from "fs";

/*
  Step 1:
  Ask the user questions using inquirer
*/
inquirer
  .prompt([
    {
      // type "number" ensures user enters a number
      type: "number",
      name: "length", // key name to access this value later
      message: "Enter password length:",
    },
    {
      // confirm type gives yes/no option
      type: "confirm",
      name: "symbols", // true or false
      message: "Include symbols?",
      default: false, // default value if user just presses Enter
    },
  ])

  /*
    Step 2:
    After user enters inputs, answers are received here
  */
  .then((answers) => {
    // Extract values entered by user
    const passwordLength = answers.length;
    const includeSymbols = answers.symbols;

    // Call function to generate password
    const password = generatePassword(passwordLength, includeSymbols);

    // Print generated password in terminal
    console.log("Generated Password:", password);

    /*
      Step 3:
      Save the generated password into a text file
    */
    fs.writeFile("password.txt", password, (err) => {
      if (err) {
        console.log("Error saving password");
      } else {
        console.log("Password saved to password.txt");
      }
    });
  });

/*
  Step 4:
  Function to generate password based on user input
*/
function generatePassword(length, includeSymbols) {

  // Characters allowed in password (letters + numbers)
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // If user selected to include symbols, add them to character list
  if (includeSymbols) {
    characters += "!@#$%^&*()_+";
  }

  // Empty string to store generated password
  let password = "";

  /*
    Loop runs 'length' times
    Each loop picks ONE random character
  */
  for (let i = 0; i < length; i++) {

    // Generate random index between 0 and characters.length - 1
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Add random character to password string
    password += characters[randomIndex];
  }

  // Return final password after loop completes
  return password;
}
