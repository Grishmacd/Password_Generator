# Password Generator 

A simple **command-line password generator** built using Node.js.  
It lets the user choose password length and whether to include symbols, then generates a random password and saves it to a file.

---

## What this app does

- Takes user input from terminal (password length + symbols option)
- Generates a random secure password
- Displays the password in terminal
- Saves the password automatically to `password.txt`

---

## How it works

- Uses **Inquirer** to ask questions in the terminal  
- Uses **File System (fs)** to store the generated password  
- Random characters are selected based on:
  - Letters (upper + lower case)
  - Numbers
  - Optional symbols (`!@#$%^&*()_+`)

If symbols are selected, they are added to the character pool before generating.

---

## Files in this project

```text
password-generator/
  index.js
  package.json
  package-lock.json
  password.txt   (generated after running)
```
## Output

- Generated password printed in terminal  
- `password.txt` created containing the password  

---

## Example Flow

- Enter password length  
- Choose whether to include symbols  
- Password is generated  
- Password is saved to file  

---

## Developer

**Grishma C.D**

