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
      acc.push({
        groupSize: acc.length === 0 ? 1 : 0,
        chars: line,
      });
    } else {
      const group = acc[acc.length - 1];
      group.groupSize +=1;
      group.chars += line;

      acc[acc.length - 1] = group;
    }

    return acc;
  }, []);
}

function countUniqueChars(group) {
  const charsInLine = new Map();
  for (const char of group.chars) {
    if (charsInLine.has(char)) {
      charsInLine.set(char, charsInLine.get(char) + 1);
    } else {
      charsInLine.set(char, 1);
    }
  }

  group.uniques = [...charsInLine.values()].filter(v => v === group.groupSize).length;

  return group.uniques;
}

(async () => {
  const lines = toEntryArray(await readInput());

  const reducedAnswers = reduceAnswers(lines);

  const countedUniqueLineItems = reducedAnswers.reduce((acc, group) => {
    acc += countUniqueChars(group);
    return acc;
  }, 0);
  console.log(reducedAnswers);


  console.log(countedUniqueLineItems);

})();
