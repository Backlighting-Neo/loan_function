// 公积金贷款基准利率
const BASE_RATIO_HOUSING_FUND = 3.25;

// 商业贷款基准利率
const BASE_RATIO_BUSINESS = 4.9;

// 商业贷款利率系数
const BUILT_IN_COEFFICIENT_LIST_OF_BUSINESS = [
  0.7, 0.8, 0.83, 0.85, 0.88, 0.9, 0.95,
  1,
  1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4
];

// 公积金贷款利率系数
const BUILT_IN_COEFFICIENT_LIST_OF_HOSING_FUND = [
  1, 1.1, 1.2
]

const BASE_RATIO_TEXT = '基准利率';
const SUFFIX_WHEN_GREATER = '倍';
const SUFFIX_WHEN_LOWER = '折';


module.exports = {

  /**
   * 获取指定基础利率，指定系数的利率
   * @param {Number} baseRatio 基础利率 4.9 或 0.049 都代表4.9%
   * @param {Number} coefficient 系数
   */
  getRatioDetail(baseRatio, coefficient) {
    if(baseRatio > 1) baseRatio /= 100;

    const suffix = coefficient === 1 ?
      '' : coefficient > 1 ? 
      SUFFIX_WHEN_GREATER : 
      SUFFIX_WHEN_LOWER;

    const text = coefficient === 1 ?
    BASE_RATIO_TEXT : coefficient < 1 ? 
    (coefficient * 10).toFixed(1) :
    coefficient.toFixed(2);

    const coefficientText = text + suffix;
    const ratio = baseRatio * coefficient;
    return {
      coefficient,
      coefficientSuffix: suffix,
      coefficientText,
      ratio,
      text: `${coefficientText}(${(ratio * 100).toFixed(2)}%)`
    }
  },

  /**
   * 
   * @param {*} baseRatio 
   * @param {*} coefficientList 
   */
  getSeriesRatio(baseRatio, coefficientList) {
    return coefficientList.map(coefficient => this.getRatioDetail(baseRatio, coefficient));
  },

  /**
   * 获取公积金利率列表
   * @param {Number} baseRatio 
   * @param {Number[]} coefficientList 
   */
  getSeriesRatioOfHousingFund(
    baseRatio = BASE_RATIO_HOUSING_FUND,
    coefficientList = BUILT_IN_COEFFICIENT_LIST_OF_HOSING_FUND
  ) {
    return this.getSeriesRatio(baseRatio, coefficientList);
  },

  /**
  * 获取商业贷款利率列表
  * @param {Number} baseRatio 
  * @param {Number[]} coefficientList 
  */
  getSeriesRatioOfBussiness(
    baseRatio = BASE_RATIO_BUSINESS,
    coefficientList = BUILT_IN_COEFFICIENT_LIST_OF_BUSINESS
  ) {
    return this.getSeriesRatio(baseRatio, coefficientList);
  }
}