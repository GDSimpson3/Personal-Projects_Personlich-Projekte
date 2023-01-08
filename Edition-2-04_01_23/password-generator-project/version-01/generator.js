const { clear } = require("console");
const fs = require("fs");
const time = new Date();
const path = require("path");
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const cht = ["¬", "|", "@", "#", "~", "£", "$", "€", "^", "&", "*", "!"];

const lowerCaseRandomval = Math.random() * lowerCase.length;
const lowerCaseRandomvalflr = Math.floor(lowerCaseRandomval);
const lowerCaseval = lowerCaseRandomvalflr;
const lowercasearrayval = lowerCase[lowerCaseval];
// console.log("LOWER==" + lowercasearrayval);

const lowerCaseRandomval2 = Math.random() * lowerCase.length;
const lowerCaseRandomvalflr2 = Math.floor(lowerCaseRandomval2);
const lowerCaseval2 = lowerCaseRandomvalflr2;
const lowercasearrayval2 = lowerCase[lowerCaseval2];
// console.log("LOWER==" + lowercasearrayval);

const upperCaseRandomval = Math.random() * upperCase.length;
const upperCaseRandomvalflr = Math.floor(upperCaseRandomval);
const upperCaseval = upperCaseRandomvalflr;
const uppercasearrayval = upperCase[upperCaseval];
// console.log("UPPER=====" + uppercasearrayval);

const upperCaseRandomval2 = Math.random() * upperCase.length;
const upperCaseRandomvalflr2 = Math.floor(upperCaseRandomval2);
const upperCaseval2 = upperCaseRandomvalflr2;
const uppercasearrayval2 = upperCase[upperCaseval2];
// console.log("UPPER=====" + uppercasearrayval);

const numberRandomval = Math.random() * numbers.length;
const numberCaseRandomvalflr = Math.floor(numberRandomval);
const numberCaseval = numberCaseRandomvalflr;
const numbercasearrayval = numbers[numberCaseval];
// console.log("NUMBER" + numbercasearrayval);

const numberRandomval2 = Math.random() * numbers.length;
const numberCaseRandomvalflr2 = Math.floor(numberRandomval2);
const numberCaseval2 = numberCaseRandomvalflr2;
const numbercasearrayval2 = numbers[numberCaseval2];
// console.log("NUMBER" + numbercasearrayval);

const chtCaseRandomval = Math.random() * cht.length;
const chtCaseRandomvalflr = Math.floor(chtCaseRandomval);
const chtCaseval = chtCaseRandomvalflr;
const chtcasearrayval = cht[chtCaseval];
// console.log("cht=====" + chtcasearrayval);

const chtCaseRandomval2 = Math.random() * cht.length;
const chtCaseRandomvalflr2 = Math.floor(chtCaseRandomval2);
const chtCaseval2 = chtCaseRandomvalflr2;
const chtcasearrayval2 = cht[chtCaseval2];

const password =
  uppercasearrayval2 +
  numbercasearrayval +
  uppercasearrayval +
  chtcasearrayval +
  numbercasearrayval2 +
  lowercasearrayval +
  chtcasearrayval2 +
  lowercasearrayval2 +
  uppercasearrayval2 +
  numbercasearrayval +
  uppercasearrayval +
  chtcasearrayval2 +
  chtcasearrayval +
  numbercasearrayval2 +
  lowercasearrayval +
  lowercasearrayval2;
console.log(
  `here is your new 16 digit password: ${password}  : it will be stored in a file`
);

const filePath = "./storedPasswords.txt";
var namethepassword = process.argv.slice(2);
console.log("name recived as: ", namethepassword);

if (fs.existsSync(filePath)) {
  fs.appendFile(
    path.join(__dirname, "./", "storedPasswords.txt"),
    `
    new password created, password name : ${namethepassword}, your password : ${password}`,
    function (err) {
      if (err) throw err;
      console.log("password file updated");
      // start of the edit------------------------
      // read file******************************
    }
  );
} else {
  fs.writeFile(
    path.join(__dirname, "./", "storedPasswords.txt"),
    "your passwords:",
    function (err) {
      if (err) throw err;
      console.log("the file was created");
      fs.appendFile(
        path.join(__dirname, "./", "storedPasswords.txt"),
        `
        your first password was created, password name : ${namethepassword}, your password : ${password}`,
        function (err) {
          if (err) throw err;
          console.log("password file updated");
          // start of the edit------------------------
          // read file******************************
        }
      );
    }
  );
}
