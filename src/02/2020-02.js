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

function parseMinMax(minMax) {
  const [min, max] = minMax.split('-');
  return {
    min,
    max
  };
}

function parseChar(char) {
  return char.replace(':', '');
}

function parsePasswordLine(passwordLine) {
  return passwordLine.split(' ');
}

function countOccurrences(password, char) {
  let counter = 0;
  for (const passwordChar of password) {
    if (passwordChar === char) {
      counter++;
    }
  }
  return counter;
}

function isValidPassword(occurrences, min, max) {
  return occurrences >= min && occurrences <= max;
}


(async () => {
  const validPasswords = toEntryArray(await readInput())
    .map(pl => {
      const [minMax, rawChar, password] = parsePasswordLine(pl);
      const {min, max} = parseMinMax(minMax)
      const char = parseChar(rawChar)
      const occurrences = countOccurrences(password, char);
      return isValidPassword(occurrences, min, max);
    })
    .filter(v => v);

  console.log(validPasswords.length);

})();
