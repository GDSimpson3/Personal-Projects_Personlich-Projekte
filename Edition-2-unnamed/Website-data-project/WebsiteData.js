const { clear } = require("console");
const fs = require("fs");
const time = new Date();
const path = require("path");
// const URL = require("url");
const urlData = "./Urldata.txt";

let inpmyURL = process.argv.slice(2);
console.log("url recived as: ", inpmyURL);
let myURLtwo = `${inpmyURL}`;
let myURL = new URL(myURLtwo);

// sterilize url
const sterilizeurlhref = myURL.href;
const toStringforurl = myURL.toString();
// host (root domain)
const urlhost = myURL.host;
// hostname excluding host
const urlhostname = myURL.hostname;
// pathname
const pathname = myURL.pathname;
// sterilize url
const sterilizeurl = myURL.search;
// object
const object = myURL.searchParams;
// add param
// myURL.searchParams.append("spsr", "9267");
// const addparams = myURL.searchParams;
// loop through params
// const loopparams = myURL.searchParams.forEach((value, name) =>
// console.log(`${name}:${value}`)
// );

if (fs.existsSync(urlData)) {
  fs.appendFile(
    path.join(__dirname, "./", "Urldata.txt"),
    `
    ---------------------------------------------------------------------------------------------------
    URL  : ${myURL}
    Sterilize url : 1= ${sterilizeurlhref}
                    2= ${toStringforurl}
    host (root domain) : ${urlhost}
    hostname excluding host : ${urlhostname}
    pathname : ${pathname}
    sterilized url and search : ${sterilizeurl}
    an object : ${object}
    `,
    function (err) {
      if (err) throw err;
      console.log("data file updated");
    }
  );
} else {
  fs.writeFile(
    path.join(__dirname, "./", "Urldata.txt"),
    "your Url data:",
    function (err) {
      if (err) throw err;
      console.log("the data was added");
      fs.appendFile(
        path.join(__dirname, "./", "Urldata.txt"),
        `
        ---------------------------------------------------------------------------------------------------
        URL  : ${myURL}
        Sterilize url : 1= ${sterilizeurlhref}
                        2= ${toStringforurl}
        host (root domain) : ${urlhost}
        hostname excluding host : ${urlhostname}
        pathname : ${pathname}
        sterilized url and search : ${sterilizeurl}
        an object : ${object}
        `,
        function (err) {
          if (err) throw err;
          console.log("data file updated");
        }
      );
    }
  );
}
setTimeout(() => {
  console.log("please press ctrl +c now ");
}, 1000);
