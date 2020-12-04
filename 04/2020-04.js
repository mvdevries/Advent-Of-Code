'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

// 'cid',

const validKeys = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
];

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n');
}

function parseLine(line) {
  const keyValues = line.split(' ');
  const passport = keyValues.reduce((acc, kv) => {
    const [key, value] = kv.split(':');
    acc[key] = value;
    return acc;
  }, {});

  passport.keys = Object.keys(passport);
  passport.valid = validKeys.reduce((acc, vk) => {
    return acc && passport.keys.includes(vk);
  }, true);

  console.log(passport);
  return passport;
}

(async () => {
  const lines = toEntryArray(await readInput());

  const passports = lines.reduce((acc, line) => {
    if (acc.length === 0 || typeof acc[acc.length - 1] === 'object') {
      acc.push(line);
    } else if (line === '') {
      const parsedPassport = parseLine(acc[acc.length - 1]);
      acc[acc.length - 1] = parsedPassport;
    } else {
      acc[acc.length - 1] += (' ' + line);
    }

    return acc;
  }, []);

  console.log(passports.length);
  console.log(passports.filter(p => !p.valid).length);
  console.log(passports);
})();
