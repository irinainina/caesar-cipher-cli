const fs = require("fs");

const readStream = (pathStr) => {
  if (fs.existsSync(pathStr)) {
    return fs.createReadStream(pathStr);
  } else if (!pathStr) {
    process.stdout.write("Please, input text:\n");
    return process.stdin;
  } else {
    process.stderr.write("Input file doesn't exist.\n");
    process.exit(1);
  } 
};

module.exports = readStream;