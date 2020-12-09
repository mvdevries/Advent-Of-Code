'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const parts = module.exports = {};

function readInput() {
  return readFileAsync(__dirname + '/input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n').filter(n => n).map(n => parseInt(n));
}

function calculate(preamble, checkNumber) {
  const entrySet = new Set()

  for (const entry of preamble) {
    const remainder = checkNumber - entry;
    if (entrySet.has(remainder)) {
      return true;
    }

    entrySet.add(entry);
  }

  return false;
}

function findInvalidNumber(numbers, preambleSize = 25) {
  for (let i = preambleSize; i < numbers.length; i++) {
    const num = numbers[i];
    const preamble = numbers.slice(i - preambleSize, i);
    if (!calculate(preamble, num)) {
      return {
        invalidNumber: num,
        index: i,
      };
    }
  }
}

function sum(numbers) {
  return numbers.reduce((a, n) => a + n, 0);
}

function findSumCombo(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 2; j < numbers.length; j++) {
      const subNumbers = numbers.slice(i, j);
      const s = sum(subNumbers);
      if (s > target) {
        break;
      }

      if (s === target) {
        return subNumbers;
      }
    }
  }
}

function min(numbers) {
  return Math.min.apply(Math, numbers);
}

function max(numbers) {
  return Math.max.apply(Math, numbers);
}

parts.part1 = async function() {
  const numbers = toEntryArray(await readInput());
  const {invalidNumber} = findInvalidNumber(numbers);
  console.log(invalidNumber);
  return invalidNumber;
}

parts.part2 = async function() {
  const numbers = toEntryArray(await readInput());
  const {index, invalidNumber} = findInvalidNumber(numbers);
  const previousNumbers = numbers.slice(0, index).filter(n => n < invalidNumber);
  const combo = findSumCombo(previousNumbers, invalidNumber);
  const minMax = max(combo) + min(combo);
  console.log(minMax);

  return minMax;
}
