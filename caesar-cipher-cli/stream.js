const stream = require('stream');
const argv = require('./argv');
const path = require('path');
const caesar = require('./caesar');
const readStream = require('./readStream');
const writeStream = require('./writeStream');

const pathToRead = argv.input ? path.resolve(argv.input) : null;
const pathToWrite = argv.output ? path.resolve(argv.output) : null;

class streamTransformer extends stream.Transform {
  _transform(data, encoding, callback) {
    this.push(caesar(data.toString()));
    callback();
  }
}

const streamTransform = () => {
  if (!argv.action || !argv.shift) {
    process.stderr.write('Required parameters are not specified.\n');
    process.exit(1);
  }
  const read = readStream(pathToRead);
  const transform = new streamTransformer();
  const write = writeStream(pathToWrite);
  read.pipe(transform).pipe(write);
};

module.exports = streamTransform;
