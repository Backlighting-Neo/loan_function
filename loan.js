// 还款方式 - 等额本息
const REPAYMENT_TYPE_FIXED_INSTALLMENT = 'fixedInstallment';
// 还款方式 - 等额本金
const REPAYMENT_TYPE_FIXED_PRINCIPAL = 'fixedPrincipal';

module.exports = {
  /**
   * @typedef {Object} RepaymentDetailInMonth 每月还款详情
   * @property {Number} monthCount 还款月序号
   * @property {Number} principal 本金
   * @property {Number} interest 利息
   * @property {Number} total 还款额
   * @property {Number} principalText 可视化本金
   * @property {Number} interestText 可视化利息
   * @property {Number} totalText 可视化还款额
   */

  /**
   * @typedef {Object} RepaymentDetailOfFixedInstallment 等额本息计算结果
   * @property {Number} repaymentMoneyPerMonth 每月还款额
   * @property {Number} totalInterset 总利息
   * @property {String} repaymentMoneyPerMonthText 可视化每月还款额
   * @property {String} totalIntersetText 可视化总利息
   * @property {RepaymentDetailInMonth[]} installmentList 每月还款详情
   */

  /**
   * @typedef {Object} RepaymentDetailOfFixedPrincipal 等额本金计算结果
   * @property {Number} repaymentPrincipalPerMonth 每月应还本金
   * @property {Number} deltaRepaymentMoneyPerMonth 每月还款额递减金额
   * @property {Number} repaymentMoneyForFirstMonth 首月还款额
   * @property {Number} totalInterset 总利息
   * @property {String} repaymentPrincipalPerMonthText 可视化每月应还本金
   * @property {String} deltaRepaymentMoneyPerMonthText 可视化每月还款额递减金额
   * @property {String} repaymentMoneyForFirstMonthText 可视化首月还款额
   * @property {String} totalIntersetText 可视化总利息
   * @property {RepaymentDetailInMonth[]} installmentList 每月还款详情
   */

  /**
   * @typedef {Object} LoanDetail 贷款计算结果
   * @property {RepaymentDetailOfFixedInstallment} fixedInstallment 等额本息计算结果
   * @property {RepaymentDetailOfFixedPrincipal} fixedPrincipal 等额本金计算结果
   */

  /**
   * 按等额本息方式计算还款
   * @param {Number} principal 本金数
   * @param {Number} interestRateInMoth 月利率
   * @param {Number} repaymentMonth 还款月数
   * @returns {RepaymentDetailOfFixedInstallment} 计算结果
   */
  _getFixedInstallmentDetail(principal, interestRateInMoth, repaymentMonth) {
    // 每月还款额
    const repaymentMoneyPerMonth = principal * 
      ( interestRateInMoth * Math.pow(1 + interestRateInMoth, repaymentMonth)) / 
      (Math.pow(1 + interestRateInMoth, repaymentMonth) - 1);
    // 总利息
    const totalInterset = repaymentMonth * repaymentMoneyPerMonth - principal;
    // 每月还款详情
    const installmentList = Array(repaymentMonth).fill(0).map((_, index) => {
      const principalInMonth = principal * interestRateInMoth * 
        Math.pow(1 + interestRateInMoth, index) / 
        (Math.pow(1 + interestRateInMoth, repaymentMonth) - 1);
      const interestInMonth = principal * interestRateInMoth * 
        (
          Math.pow(1 + interestRateInMoth, repaymentMonth) - 
          Math.pow(1 + interestRateInMoth, index)
        ) / 
        (Math.pow(1 + interestRateInMoth, repaymentMonth) - 1);

      return {
        monthCount: index + 1, // 还款月序号
        principal: principalInMonth, // 每月应还本金
        interest: interestInMonth,  // 每月应还利息
        principalText: principalInMonth.toFixed(2),  // 可视化每月应还本金
        interestText: interestInMonth.toFixed(2),  // 可视化每月应还利息
        total: repaymentMoneyPerMonth,  // 每月还款额
        totalText: repaymentMoneyPerMonth.toFixed(2)  // 可视化每月还款额
      };
    });

    return {
      repaymentMoneyPerMonth,
      repaymentMoneyPerMonthText: repaymentMoneyPerMonth.toFixed(2),
      totalInterset,
      totalIntersetText: totalInterset.toFixed(2),
      installmentList
    }
  },

  /**
   * 按等额本金方式计算还款
   * @param {Number} principal 本金数(单位元) 例如贷款150万,principal=1500000
   * @param {Number} interestRateInMoth 利率 例如利率为4.9%时,interestRateInMoth=0.049
   * @param {Number} repaymentMonth 还款月数(单位月) 例如贷款25年,repaymentMonth=300
   * @returns {RepaymentDetailOfFixedPrincipal} 计算结果
   */
  _getFixedPrincipalDetail(principal, interestRateInMoth, repaymentMonth) {
    // 每月应还本金
    const repaymentPrincipalPerMonth = principal / repaymentMonth;
    // 每月还款额递减金额
    const deltaRepaymentMoneyPerMonth = repaymentPrincipalPerMonth * interestRateInMoth;
    // 首月还款额
    const repaymentMoneyForFirstMonth = repaymentPrincipalPerMonth + principal * interestRateInMoth;
    // 总利息
    const totalInterset = (
      repaymentMoneyForFirstMonth + 
      principal / repaymentMonth * ( 1 + interestRateInMoth )
    ) / 2 * repaymentMonth - principal;
    // 每月还款详情
    const installmentList = Array(repaymentMonth).fill(0).map((_, index) => {
      // 每月应还利息
      const interestInMonth = (principal - repaymentPrincipalPerMonth * index) * interestRateInMoth;
      const total = repaymentPrincipalPerMonth + interestInMonth;
      return {
        monthCount: index + 1, // 还款月序号
        principal: repaymentPrincipalPerMonth, // 每月应还本金
        interest: interestInMonth,  // 每月应还利息
        principalText: repaymentPrincipalPerMonth.toFixed(2),  // 可视化每月应还本金
        interestText: interestInMonth.toFixed(2),  // 可视化每月应还利息
        total: total,  // 每月还款额
        totalText: total.toFixed(2)  // 可视化每月还款额
      }
    });
    return {
      repaymentPrincipalPerMonth,  // 每月应还本金
      deltaRepaymentMoneyPerMonth,  // 每月还款额递减金额
      repaymentMoneyForFirstMonth,  // 首月还款额
      totalInterset,  // 总利息
      repaymentPrincipalPerMonthText: repaymentPrincipalPerMonth.toFixed(2),  // 可视化每月应还本金
      deltaRepaymentMoneyPerMonthText: deltaRepaymentMoneyPerMonth.toFixed(2),  // 可视化每月还款额递减金额
      repaymentMoneyForFirstMonthText: repaymentMoneyForFirstMonth.toFixed(2),  // 可视化首月还款额
      totalIntersetText: totalInterset.toFixed(2),  // 可视化总利息
      installmentList  // 每月还款详情
    }
  },

  /**
  * @function getLoanDetail 按等额本息和等额本金方式计算还款
  * @param {Number} principal 本金数
  * @param {Number} interestRateInYear 年利率
  * @param {Number} repaymentMonth 还款月数
  * @returns {LoanDetail} 计算结果
  */
  getLoanDetail(principal, interestRateInYear, repaymentMonth) {
    const interestRateInMoth = interestRateInYear / 12;
    return {
      [REPAYMENT_TYPE_FIXED_INSTALLMENT]: this._getFixedInstallmentDetail(principal, interestRateInMoth, repaymentMonth),
      [REPAYMENT_TYPE_FIXED_PRINCIPAL]: this._getFixedPrincipalDetail(principal, interestRateInMoth, repaymentMonth)
    }
  }
}