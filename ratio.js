/**
 * @constant {Number} 公积金贷款基准利率
 */
const BASE_RATIO_HOUSING_FUND = 3.25;

/**
 * @constant {Number} 商业贷款基准利率
 */
const BASE_RATIO_BUSINESS = 4.9;

/**
* @constant {Number[]} 商业贷款利率系数
*/
const BUILT_IN_COEFFICIENT_LIST_OF_BUSINESS = [
  0.7, 0.8, 0.83, 0.85, 0.88, 0.9, 0.95,
  1,
  1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4
];

/**
* @constant {Number[]} 公积金贷款利率系数
*/
const BUILT_IN_COEFFICIENT_LIST_OF_HOSING_FUND = [
  1, 1.1, 1.2
]

const BASE_RATIO_TEXT = '基准利率';
const SUFFIX_WHEN_GREATER = '倍';
const SUFFIX_WHEN_LOWER = '折';

module.exports = {

  /**
   * @typedef {Object} RatioDetail 带系数的利率详情
   * @property {Number} coefficient 系数 例如1.05
   * @property {String} coefficientSuffix 倍数结尾文字 例如"折"或"倍"
   * @property {String} coefficientText 倍数 例如"1.05倍"
   * @property {Number} ratio 利率 例如0.05145
   * @property {String} text 用于显示的完整文字 例如"1.05倍(5.145%)"
   */

  /**
   * 获取指定基础利率，指定系数的利率
   * @param {Number} baseRatio 基础利率 例如利率为4.9%时为0.049
   * @param {Number} coefficient 系数 例如1.1倍时为1.1，8折时为0.8
   * @returns {RatioDetail} 计算结果
   */
  getRatioDetail(baseRatio, coefficient) {
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
   * 获取贷款利率系数列表
   * @param {Number} baseRatio 基础利率 例如利率为4.9%时为0.049
   * @param {Number[]} coefficientList 系数列表
   * @returns {RatioDetail[]} 计算结果
   */
  getSeriesRatio(baseRatio, coefficientList) {
    return coefficientList.map(coefficient => this.getRatioDetail(baseRatio, coefficient));
  },

  /**
   * @function getSeriesRatioOfHousingFund 获取公积金利率列表
   * @param {Number} baseRatio=0.049 基础利率 例如利率为4.9%时为0.049
   * @param {Number[]} coefficientList=[1,1.1,1.2] 系数列表
   * @returns {RatioDetail[]} 计算结果
   */
  getSeriesRatioOfHousingFund(
    baseRatio = BASE_RATIO_HOUSING_FUND,
    coefficientList = BUILT_IN_COEFFICIENT_LIST_OF_HOSING_FUND
  ) {
    return this.getSeriesRatio(baseRatio, coefficientList);
  },

  /**
  * @function getSeriesRatioOfBussiness 获取商业贷款利率列表
  * @param {Number} baseRatio=0.0325 基础利率 例如利率为4.9%时为0.049
  * @param {Number[]} coefficientList=[0.7,0.8,0.83,0.85,0.88,0.9,0.95,1,1.05,1.1,1.15,1.2,1.25,1.3,1.35,1.4] 系数列表
  * @returns {RatioDetail[]} 计算结果
  * @returns {}
  */
  getSeriesRatioOfBussiness(
    baseRatio = BASE_RATIO_BUSINESS,
    coefficientList = BUILT_IN_COEFFICIENT_LIST_OF_BUSINESS
  ) {
    return this.getSeriesRatio(baseRatio, coefficientList);
  }
}