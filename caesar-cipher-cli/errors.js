const argv = require('./argv');

const errors = () => {
  if(!argv.action || !argv.shift) {
    console.error('required parameters are not specified')
    process.exit(1)
}

module.exports = errors();