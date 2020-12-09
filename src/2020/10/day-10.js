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
  return true;
};

parts.part2 = async function() {
  return true;
};

(async () => {
  try {
    const answer = await parts.part1();
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
})();
