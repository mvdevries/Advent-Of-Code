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

function countTreesOnSlope(lines, right, down) {
  let rightPos = 0;
  let trees = 0;

  for (let i = 0; i < lines.length; i+=down) {
    const line = lines[i];
    if (line.charAt(rightPos) === '#') {
      trees += 1;
    }

    rightPos += right;
    rightPos %= 31;
  }

  return trees;
}

(async () => {
  const lines = toEntryArray(await readInput());

  let count = countTreesOnSlope(lines, 1, 1);
  count *= countTreesOnSlope(lines, 3, 1);
  count *= countTreesOnSlope(lines, 5, 1);
  count *= countTreesOnSlope(lines, 7, 1);
  count *= countTreesOnSlope(lines, 1, 2);

  console.log(count)
})();
