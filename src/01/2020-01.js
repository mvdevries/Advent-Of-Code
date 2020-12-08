'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n').filter(n => n).map(n => parseInt(n));
}

function calculate(entries) {
  const entrySet = new Set(entries)

  for (const entry of entries) {
    const remainder = 2020 - entry;
    if (entrySet.has(remainder)) {
      return entry * remainder;
    }
  }
}

(async () => {
  const input = await readInput();
  const entries = toEntryArray(input);
  console.log(entries)


  const answer = calculate(entries);
  console.log(answer);
})();
