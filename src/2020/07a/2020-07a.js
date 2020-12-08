'use strict';
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(readFile);

function readInput() {
  return readFileAsync('input.txt', 'utf8');
}

function toEntryArray(input) {
  return input.split('\n').filter(n => n);
}

function isNumeric(num){
  return !isNaN(num)
}

function parseInnerBags(words) {
  return words.reduce((acc, word) => {
    if (isNumeric(word)) {
      acc.push([word]);
    } else {
      acc[acc.length - 1].push(word);
    }

    if (acc[acc.length - 1].length === 4) {
      const amount = parseInt(acc[acc.length - 1].shift());
      acc[acc.length - 1] = parseRule(acc[acc.length - 1].join(' '), amount);
    }

    return acc;
  }, []);
}

function parseRule(line, amount) {
  const [type, color, ...words] = line.split(' ');
  const bag = new BagType(type, color, amount);

  words.splice(0, 2);
  if (words[0] !== 'no') {
    bag.addInnerBags(parseInnerBags(words));
  }

  return bag;
}

function countInnerBags(bags, forId) {
  return bags
    .find(bag => bag.id === forId)
    .childs
    .reduce((acc, cb) => {
      return acc + cb._amount + (cb._amount * countInnerBags(bags, cb.id));
    }, 0);
}

(async () => {
  const lines = toEntryArray(await readInput());
  const bags = lines.map((rule) => parseRule(rule));

  const innerBagsCount = countInnerBags(bags, 'shiny_gold');
  console.log(innerBagsCount);
})();


class BagType {
  constructor(type, color, amount) {
    this._type = type;
    this._color = color;
    this._amount = amount;
    this._innerBags = new Map();
  }

  get id() {
    return `${this._type}_${this._color}`
  }

  addInnerBags(bags) {
    for (const bag of bags) {
      this.addInnerBag(bag);
    }
  }

  addInnerBag(bag) {
    this._innerBags.set(bag.id, bag);
  }

  get childs() {
    return [...this._innerBags.values()];
  }
}
