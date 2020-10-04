const argv = require('./argv');

const u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const l = 'abcdefghijklmnopqrstuvwxyz';

function caesar(string) {
  const shift = argv.action === 'decode' ? -argv.shift % 26 : argv.shift % 26;
  return string.replace(/[a-z]/g, (letter) => l[(l.indexOf(letter) + 26 + shift) % 26])
               .replace(/[A-Z]/g, (letter) => u[(u.indexOf(letter) + 26 + shift) % 26]) + '\n';
}

module.exports = caesar;
