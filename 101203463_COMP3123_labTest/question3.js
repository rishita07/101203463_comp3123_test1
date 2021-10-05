/*// Create Log files

const fs = require('fs'); 
if(!fs.existsSync("Logs")) {
fs.mkdirSync("Logs");
}
process.chdir("Logs");
for(let i = 0; i < 10; i++) {
const filename = `log${i}.txt`;
fs.writeFile(filename, 'text', (err) => {
if (err) {
throw err;
}
});
console.log(filename);
}
*/

// Remove Log files

const fs = require('fs'); 
const path = require('path'); 
if(fs.existsSync("Logs")) {
fs.readdir("Logs", (err, files) => {
if (err) throw err;
for (const file of files) {

const filepath = path.join("Logs", file);
fs.unlink(filepath, err => {
if (err) throw err;
});
console.log(`delete files...${file}`);
}
fs.rmdirSync("Logs");
});
}
