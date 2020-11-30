'use strict';
const {sessionFilename, adventOfCodeUrl} = require('./constants');
const StackTrace = require('stacktrace-js');
const AdventOfCodeApi = require('./advent-of-code-api');
const path = require('path');
const {access, F_OK} = require('fs');
const {promisify} = require('util');
const accessAsync = promisify(access);

module.exports = class AdventOfCodeService {
  constructor(
    adventOfCodeApi = new AdventOfCodeApi(adventOfCodeUrl, sessionFilename)
  ) {
    this._adventOfCodeApi = adventOfCodeApi;
  }

  async getInput() {
    const adventFilename = this.#getAdventFilename();
    const {year, day, part} = this.#getDayYearPart(adventFilename);

    const cachedInput = await this.#getCachedInputFileContent();
    if (!cachedInput) {

    }
  }

  commitOutput() {

  }

  async #getCachedInputFileContent(path) {
    try {}
  }

  #getCachedInputFilePath({year, day, part}) {
    return `${year}-${day}${part}.txt`;
  }

  #getDayYearPart(adventFilename) {
     const fileName = path.parse(adventFilename).base;
    const [_, year, day, part] = /([0-9]{4})-([0-9]{2})([b]{0,1})/.exec(fileName);

    if (!year || !day) {
      // TODO: Throw error of log and exit
    }

    return { year, day, part };
  }

  #getAdventFilename() {
    const stack = StackTrace
      .getSync()
      .filter(sf => sf.fileName !== __filename);

    if (stack.length < 1) {
      // TODO: Throw error or log and exit
    }

    return stack[0].fileName;
  }
}
