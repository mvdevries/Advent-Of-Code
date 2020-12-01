'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}










(async () => {

})();
