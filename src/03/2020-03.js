'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n').filter(n => n);
}

(async () => {
  const lines = toEntryArray(await readInput());

  let trees = 0;
  let rightPos = 0;

  for (const line of lines) {
    if (line.charAt(rightPos) === '#') {
      trees += 1;
    }

    rightPos += 3;
    rightPos %= 31;
  }

  console.log(trees);
})();
