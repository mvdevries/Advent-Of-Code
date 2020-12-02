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

function parsePositions(positions) {
  return positions.split('-');
}

function parseChar(char) {
  return char.replace(':', '');
}

function parsePasswordLine(passwordLine) {
  return passwordLine.split(' ');
}

function hasChar(password, char, pos) {
  return password.charAt(pos - 1) === char;
}

(async () => {
  const validPasswords = toEntryArray(await readInput())
    .map(pl => {
      const [positions, rawChar, password] = parsePasswordLine(pl);
      const [pos1, pos2] = parsePositions(positions)
      const char = parseChar(rawChar)
      return hasChar(password, char, parseInt(pos1)) ^ hasChar(password, char, parseInt(pos2));
    })
    .filter(v => v);

  console.log(validPasswords.length);
})();
