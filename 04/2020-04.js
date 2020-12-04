'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const requiredFields = [
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

function parsePassportFields(line) {
  const fields = line.split(' ');
  const passportFields = new Set();
  const passport = fields.reduce((p, field) => {
    const [key, value] = field.split(':');
    p[key] = value;
    passportFields.add(key);
    return p;
  }, {});

  passport.hasRequiredFields = requiredFields.reduce((valid, key) => {
    return valid && passportFields.has(key);
  }, true);

  return passport;
}

function getPassports(lines) {
  return lines.reduce((acc, line) => {
    if (acc.length === 0 || typeof acc[acc.length - 1] === 'object') {
      acc.push(line);
    } else if (line === '') {
      acc[acc.length - 1] = parsePassportFields(acc[acc.length - 1]);
    } else {
      acc[acc.length - 1] += (' ' + line);
    }

    return acc;
  }, []);
}

(async () => {
  const lines = toEntryArray(await readInput());
  const passports = getPassports(lines);

  console.log(passports.filter(p => p.hasRequiredFields).length);
})();
