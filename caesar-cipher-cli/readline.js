const fs = require('fs');
const argv = require('./argv');
const readline = require('readline');
const caesar = require('./caesar');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function recursiveReadline() {
  if(!argv.action || !argv.shift || argv.input || argv.output) return;
  rl.question(`Please, input text \n`, (text) => {
      if (text === 'exit') return rl.close();
      console.log(caesar(text));
      recursiveReadline(); 
  });
};

module.export = recursiveReadline();