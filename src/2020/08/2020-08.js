'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);
const Computer = require('./computer');

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n').filter(n => n);
}

(async () => {
  const lines = toEntryArray(await readInput());

  const computer = new Computer();
  computer.load(lines);
  computer.execute();
  console.log(computer)
})();
