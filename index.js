const ratio = require('./ratio');
const loan = require('./loan');

console.log(loan._getFixedPrincipalDetail(
  150 * 10000,
  4.9 / 100 / 12,
  25 * 12
))

module.exports = {
  getLoanDetail: loan.getLoanDetail,
  getSeriesRatioOfHousingFund: ratio.getSeriesRatioOfHousingFund,
  getSeriesRatioOfBussiness: ratio.getSeriesRatioOfBussiness
}