const stream = require('stream');
const argv = require('./argv');
const fs = require('fs');
const path = require('path');
const caesar = require('./caesar');

const pathToRead = path.join(__dirname, argv.input);
const pathToWrite = path.join(__dirname, argv.output);

class UpperCaseTransformer extends stream.Transform {
  _transform(data, encoding, callback) {
    this.push(caesar(data.toString()));
    callback();
  }
}

const streamTransform = () => {
  if(!argv.action || !argv.shift || !argv.input || !argv.output) return;
  const read = fs.createReadStream(pathToRead);
  const transform = new UpperCaseTransformer();
  const write = fs.createWriteStream(pathToWrite, { flags: 'a' });
  read.pipe(transform).pipe(write);
};

module.exports = streamTransform();
