const fs = require('fs');

if (!fs.existsSync('dist')){
  fs.mkdirSync('dist');
}

const version = require('../package.json').version;

/* eslint no-console:"off" */
console.log('version: ' + version);