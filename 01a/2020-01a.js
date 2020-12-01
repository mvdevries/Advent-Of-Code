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

  for (let i = 0; i < entries.length; i++) {
    const entry1 = entries[i];
    const remainder23 = 2020 - entry1;

    for (let j = i + 1; j < entries.length; j++) {
      const entry2 = entries[j];
      const remainder3 = remainder23 - entry2;

      if (entrySet.has(remainder3)) {
        return entry1 * entry2 * remainder3
      }
    }
  }
}

(async () => {
  const input = await readInput();
  let entries = toEntryArray(input);
  entries.sort();

  const answer = calculate(entries);
  console.log(answer);
})();
