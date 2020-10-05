const fs = require("fs");

const writeStream = (pathStr) => {
  if (fs.existsSync(pathStr)) {
    return fs.createWriteStream(pathStr, { flags: 'a' });
  } else if (!pathStr) {
    return process.stdout;
  } else {
    process.stderr.write("Output file doesn't exist.\n");
    process.exit(1);
  }
};

module.exports = writeStream;