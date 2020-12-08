'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n');
}


function reduceAnswers(lines) {
  return lines.reduce((acc, line) => {
    if (acc.length === 0 || line === '') {
      acc.push(line);
    } else {
      acc[acc.length - 1] += line;
    }

    return acc;
  }, []);
}

function countUniqueChars(line) {
  const charsInLine = new Set([...line]);
  console.log(charsInLine);
  return charsInLine.size;
}

(async () => {
  const lines = toEntryArray(await readInput());

  const reducedAnswers = reduceAnswers(lines);
  // reducedAnswers.pop();

  const countedUniqueLineItems = reducedAnswers.reduce((acc, line) => {
    acc += countUniqueChars(line);
    return acc;
  }, 0);

  console.log(countedUniqueLineItems);

})();
