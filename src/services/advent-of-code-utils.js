'use strict';
const moment = require('moment');
const {filesToCreate} = require('./constants');
const utils = module.exports = {};

utils.getCurrentDay = function(leadingZero = true) {
  const day = moment().date();
  if (leadingZero && day < 10) {
    return String(day).padStart(2, '0');
  }
  return day;
};

utils.createDay = async function(day) {

};

utils.downloadInput = async function(day) {
  throw new Error('Not yet implemented')
};
