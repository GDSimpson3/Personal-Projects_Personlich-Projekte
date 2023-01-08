const os = require("os");

// platform
console.log("---------------platform---------------");
console.log(os.platform());
// cpu arch
console.log("---------------cpu-arch---------------");
console.log(os.arch());
// cpu count
console.log("---------------cpu-data---------------");
console.log(os.cpus());
// free memory
console.log("---------------free-memory---------------");
console.log(os.freemem());
// total memory
console.log("---------------total-memory---------------");
console.log(os.totalmem());
// home dir
console.log("---------------home-dir---------------");
console.log(os.homedir());
// uptime
console.log("---------------uptime---------------");
console.log(os.uptime());
// hostname
console.log("---------------hostname---------------");
console.log(os.hostname());
//release
console.log("---------------release---------------");
console.log(os.release());
