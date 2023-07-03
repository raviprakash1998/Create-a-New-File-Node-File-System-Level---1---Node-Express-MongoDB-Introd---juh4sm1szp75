const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
var createStream = fs.createWriteStream(filename);
writeStream.write(fileContent);
createStream.end();
};

module.exports = { writeFile };
