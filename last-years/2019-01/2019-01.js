'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const fileName = 'input.txt';

async function loadInput() {
  const data = await readFileAsync(fileName, 'utf8');
  return data.split('\n').filter(m => m);
}

async function main() {
  const masses = await loadInput();
  const newMasses = masses.map(m => Math.floor(m / 3) - 2);
  const totalMass = newMasses.reduce((acc, value) => {
    return acc + value;
  });
  console.log(totalMass);
}

(async () => {
  try {
    await main();
  } catch (err) {
    console.log(err);
  }
})();
