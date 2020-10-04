const minimist = require('minimist');

const argv = minimist(process.argv.slice(2), {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action'
  }
});

module.exports = argv;

// node app -a "encode" -s 5 -i "input.txt" -o "output.txt"
// console.log(argv)
// {
//   _: [],
//   a: 'encode',
//   action: 'encode',
//   s: 7,
//   shift: 7,
//   i: './input.txt',
//   input: './input.txt',
//   o: './output.txt',
//   output: './output.txt'
// }