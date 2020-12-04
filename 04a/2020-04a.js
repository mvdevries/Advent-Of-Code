'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

const validKeys = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
];

const validEyeColor = [
  'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth',
];

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n');
}

function checkValueForKey(key, value) {
  switch (key) {
    case 'byr':
      return ('' + value).length === 4 && value >= 1920 && value <= 2002;
    case 'iyr':
      return ('' + value).length === 4 && value >= 2010 && value <= 2020;
    case 'eyr':
      return ('' + value).length === 4 && value >= 2020 && value <= 2030;
    case 'hgt':
      const parsedHeight = /(\d+)(cm|in)/.exec(value);
      if (!parsedHeight) {
        return false;
      }
      const [_, rawSize, type] = parsedHeight;
      const size = parseInt(rawSize);
      return (type === 'cm' && size >= 150 && size <= 193) || (type === 'in' && size >= 59 && size <= 76);
    case 'hcl':
      return !!/^#([a-fA-F0-9]{6})/.exec(value);
    case 'ecl':
      const temp = validEyeColor.includes(value);
      return temp;
    case 'pid':
      return /^[0-9]{9}$/.exec(value);
  }
}

function parseLine(line) {
  const keyValues = line.split(' ');
  const passport = keyValues.reduce((acc, kv) => {
    const [key, value] = kv.split(':');
    acc[key] = value;
    return acc;
  }, {});

  passport.keys = Object.keys(passport);
  passport.valid = validKeys.reduce((acc, key) => {
    return acc && passport.keys.includes(key) && checkValueForKey(key, passport[key]);
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
  console.log(passports.filter(p => p.valid).length);
})();
