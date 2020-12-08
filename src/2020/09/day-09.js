'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const parts = module.exports = {};

function readInput() {
  return readFileAsync(__dirname + '/input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n').filter(n => n);
}

parts.part1 = async function() {
  const lines = toEntryArray(await readInput());

}

parts.part2 = async function() {
  const lines = toEntryArray(await readInput());

}

(async () => {
  try {
    await parts.part1();
    // await parts.part2();
  } catch (err) {
    console.log('error');
    console.log(err);
  }
})();
