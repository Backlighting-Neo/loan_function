const ratio = require('./ratio');
const loan = require('./loan');

module.exports = {
  getLoanDetail: loan.getLoanDetail,
  getSeriesRatioOfHousingFund: ratio.getSeriesRatioOfHousingFund,
  getSeriesRatioOfBussiness: ratio.getSeriesRatioOfBussiness
}