const ratio = require('./ratio');
const loan = require('./loan');

const result = loan.getLoanDetail(
  150 * 10000,
  0.05145,
  25 * 12
);

console.log(result);