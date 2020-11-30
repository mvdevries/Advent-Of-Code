'use strict';
const AdventOfCodeService = require('../services/advent-of-code');


(async () => {
  const aocService = new AdventOfCodeService();
  const input = aocService.get();
  console.log(input);
})();
