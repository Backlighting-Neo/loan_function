## Constants

<dl>
<dt><a href="#公积金贷款基准利率">公积金贷款基准利率</a> : <code>Number</code></dt>
<dd></dd>
<dt><a href="#商业贷款基准利率">商业贷款基准利率</a> : <code>Number</code></dt>
<dd></dd>
<dt><a href="#商业贷款利率系数">商业贷款利率系数</a> : <code>Array.&lt;Number&gt;</code></dt>
<dd></dd>
<dt><a href="#公积金贷款利率系数">公积金贷款利率系数</a> : <code>Array.&lt;Number&gt;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getLoanDetail 按等额本息和等额本金方式计算还款">getLoanDetail 按等额本息和等额本金方式计算还款(principal, interestRateInYear, repaymentMonth)</a> ⇒ <code><a href="#LoanDetail">LoanDetail</a></code></dt>
<dd></dd>
<dt><a href="#getSeriesRatioOfHousingFund 获取公积金利率列表">getSeriesRatioOfHousingFund 获取公积金利率列表(baseRatio, coefficientList)</a> ⇒ <code><a href="#RatioDetail">Array.&lt;RatioDetail&gt;</a></code></dt>
<dd></dd>
<dt><a href="#getSeriesRatioOfBussiness 获取商业贷款利率列表">getSeriesRatioOfBussiness 获取商业贷款利率列表(baseRatio, coefficientList)</a> ⇒ <code><a href="#RatioDetail">Array.&lt;RatioDetail&gt;</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RepaymentDetailInMonth">RepaymentDetailInMonth</a> : <code>Object</code></dt>
<dd><p>每月还款详情</p>
</dd>
<dt><a href="#RepaymentDetailOfFixedInstallment">RepaymentDetailOfFixedInstallment</a> : <code>Object</code></dt>
<dd><p>等额本息计算结果</p>
</dd>
<dt><a href="#RepaymentDetailOfFixedPrincipal">RepaymentDetailOfFixedPrincipal</a> : <code>Object</code></dt>
<dd><p>等额本金计算结果</p>
</dd>
<dt><a href="#LoanDetail">LoanDetail</a> : <code>Object</code></dt>
<dd><p>贷款计算结果</p>
</dd>
<dt><a href="#RatioDetail">RatioDetail</a> : <code>Object</code></dt>
<dd><p>带系数的利率详情</p>
</dd>
</dl>

<a name="公积金贷款基准利率"></a>

## 公积金贷款基准利率 : <code>Number</code>
**Kind**: global constant  
<a name="商业贷款基准利率"></a>

## 商业贷款基准利率 : <code>Number</code>
**Kind**: global constant  
<a name="商业贷款利率系数"></a>

## 商业贷款利率系数 : <code>Array.&lt;Number&gt;</code>
**Kind**: global constant  
<a name="公积金贷款利率系数"></a>

## 公积金贷款利率系数 : <code>Array.&lt;Number&gt;</code>
**Kind**: global constant  
<a name="getLoanDetail 按等额本息和等额本金方式计算还款"></a>

## getLoanDetail 按等额本息和等额本金方式计算还款(principal, interestRateInYear, repaymentMonth) ⇒ [<code>LoanDetail</code>](#LoanDetail)
**Kind**: global function  
**Returns**: [<code>LoanDetail</code>](#LoanDetail) - 计算结果  

| Param | Type | Description |
| --- | --- | --- |
| principal | <code>Number</code> | 本金数 |
| interestRateInYear | <code>Number</code> | 年利率 |
| repaymentMonth | <code>Number</code> | 还款月数 |

<a name="getSeriesRatioOfHousingFund 获取公积金利率列表"></a>

## getSeriesRatioOfHousingFund 获取公积金利率列表(baseRatio, coefficientList) ⇒ [<code>Array.&lt;RatioDetail&gt;</code>](#RatioDetail)
**Kind**: global function  
**Returns**: [<code>Array.&lt;RatioDetail&gt;</code>](#RatioDetail) - 计算结果  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| baseRatio | <code>Number</code> | <code>0.049</code> | 基础利率 例如利率为4.9%时为0.049 |
| coefficientList | <code>Array.&lt;Number&gt;</code> | <code>[1,1.1,1.2</code> | 系数列表 |

<a name="getSeriesRatioOfBussiness 获取商业贷款利率列表"></a>

## getSeriesRatioOfBussiness 获取商业贷款利率列表(baseRatio, coefficientList) ⇒ [<code>Array.&lt;RatioDetail&gt;</code>](#RatioDetail)
**Kind**: global function  
**Returns**: [<code>Array.&lt;RatioDetail&gt;</code>](#RatioDetail) - 计算结果  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| baseRatio | <code>Number</code> | <code>0.0325</code> | 基础利率 例如利率为4.9%时为0.049 |
| coefficientList | <code>Array.&lt;Number&gt;</code> | <code>[0.7,0.8,0.83,0.85,0.88,0.9,0.95,1,1.05,1.1,1.15,1.2,1.25,1.3,1.35,1.4</code> | 系数列表 |

<a name="RepaymentDetailInMonth"></a>

## RepaymentDetailInMonth : <code>Object</code>
每月还款详情

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| monthCount | <code>Number</code> | 还款月序号 |
| principal | <code>Number</code> | 本金 |
| interest | <code>Number</code> | 利息 |
| total | <code>Number</code> | 还款额 |
| principalText | <code>Number</code> | 可视化本金 |
| interestText | <code>Number</code> | 可视化利息 |
| totalText | <code>Number</code> | 可视化还款额 |

<a name="RepaymentDetailOfFixedInstallment"></a>

## RepaymentDetailOfFixedInstallment : <code>Object</code>
等额本息计算结果

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| repaymentMoneyPerMonth | <code>Number</code> | 每月还款额 |
| totalInterset | <code>Number</code> | 总利息 |
| repaymentMoneyPerMonthText | <code>String</code> | 可视化每月还款额 |
| totalIntersetText | <code>String</code> | 可视化总利息 |
| installmentList | [<code>Array.&lt;RepaymentDetailInMonth&gt;</code>](#RepaymentDetailInMonth) | 每月还款详情 |

<a name="RepaymentDetailOfFixedPrincipal"></a>

## RepaymentDetailOfFixedPrincipal : <code>Object</code>
等额本金计算结果

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| repaymentPrincipalPerMonth | <code>Number</code> | 每月应还本金 |
| deltaRepaymentMoneyPerMonth | <code>Number</code> | 每月还款额递减金额 |
| repaymentMoneyForFirstMonth | <code>Number</code> | 首月还款额 |
| totalInterset | <code>Number</code> | 总利息 |
| repaymentPrincipalPerMonthText | <code>String</code> | 可视化每月应还本金 |
| deltaRepaymentMoneyPerMonthText | <code>String</code> | 可视化每月还款额递减金额 |
| repaymentMoneyForFirstMonthText | <code>String</code> | 可视化首月还款额 |
| totalIntersetText | <code>String</code> | 可视化总利息 |
| installmentList | [<code>Array.&lt;RepaymentDetailInMonth&gt;</code>](#RepaymentDetailInMonth) | 每月还款详情 |

<a name="LoanDetail"></a>

## LoanDetail : <code>Object</code>
贷款计算结果

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fixedInstallment | [<code>RepaymentDetailOfFixedInstallment</code>](#RepaymentDetailOfFixedInstallment) | 等额本息计算结果 |
| fixedPrincipal | [<code>RepaymentDetailOfFixedPrincipal</code>](#RepaymentDetailOfFixedPrincipal) | 等额本金计算结果 |

<a name="RatioDetail"></a>

## RatioDetail : <code>Object</code>
带系数的利率详情

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| coefficient | <code>Number</code> | 系数 例如1.05 |
| coefficientSuffix | <code>String</code> | 倍数结尾文字 例如"折"或"倍" |
| coefficientText | <code>String</code> | 倍数 例如"1.05倍" |
| ratio | <code>Number</code> | 利率 例如0.05145 |
| text | <code>String</code> | 用于显示的完整文字 例如"1.05倍(5.145%)" |

