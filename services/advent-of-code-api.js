'use strict';
const axios = require('axios');
const {readFileSync} = require('fs');
const path = require('path');

module.exports = class AdventOfCodeApi {
  constructor(adventOfCodeUrl, sessionFilename) {
    const session = this.#getSession(sessionFilename)

    this._instance = axios.create({
      baseURL: adventOfCodeUrl,
      headers: {
        Cookie: this.#buildCookieString([{name: 'session', value: session}]),
      },
    });
  }

  downloadInput({year, day, part}) {
    return this._instance.get(`${year}/day/${day}${part}/input`);
  }

  #buildCookieString(cookies) {
    return cookies.reduce((acc, cookie) => `${acc}; ${cookie.name}=${cookie.value}`);
  }

  #getSession(sessionFileName) {
    return readFileSync(path.join(__dirname, '..', sessionFilename))
  }
}
