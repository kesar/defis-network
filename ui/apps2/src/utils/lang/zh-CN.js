export default {
  public: {
    loginPls: '请先登录',
    login: '登录',
    warmTip: '本项目的智能合约已经过专业安全团队审计。但仍可能存在不可意料的风险。请注意并自行承担使用风险。',
    balance: '余额',
    noData: '暂无数据',
    loginOut: '退出',
    known: '我已知晓',
    noTip: '不再提示',
    fee: '手续费',
    cancel: '取消',
    useDefined: '自定义',
    balanLow: '余额不足',
    tokenLow: '可用凭证数量不足',
    success: '操作成功',
    tutorial: '教程',
    safeRecord: 'DFS智能合约由慢雾提供安全审计',
    safeRecord1: 'DFS智能合约由',
    safeRecord2: '慢雾',
    safeRecord4: '派盾',
    safeRecord3: '提供安全审计',
    confirm: '确认',
    unLogin: '您还未登录账号，请',
    warmPrompt: '温馨提示',
    usddTip: '请考虑USDD价格存在因直接兑换或加杠杆行为导致的波动，自负使用风险',
    lastUpdate: '最近更新时间', // last update
    warnTip: '风险提示',
    detail: '详情',
  },
  invi: {
    invitation: '邀请', // invitation
    toInviter: '成为邀请人', // Become an inviter
    whatIsInviter: '每当被邀请人通过邀请人链接完成一笔SWAP交易，该笔交易挖矿算力增加5%，其中4%归被邀请人，1%归邀请人。',
    // Whenever the inviter completes a SWAP transaction through the inviter link, the mining calculation power of the transaction increases by 5%, among which 4% belongs to the inviter and 1% to the inviter.
    way1: '方式一',
    way1Tip: '消耗100 DFS成为邀请人',
    join: '加入',
    way2: '方式二',
    way2Tip: '抵押5000DFS成为邀请人，赎回后失去资格',
    myLink: '我的邀请链接',
    copy: '复制',
  },
  tab: {
    bank: '金库',
    dex: '兑换',
    pools: '做市',
    hyk: '认购'
  },
  bank: {
    stake: '抵押',
    borrow: '生成',
    genFee: '铸币费',
    borrowBtn: '生成USDD',
    stakeNum: '抵押数量',
    mineStake: '抵押',
    borrowNum: '生成数量',
    redeem: '赎回',
    mining: '抵押中',
    record: '生成记录',
    stakeInMining: '抵押中',
    canRedeem: '后可进行赎回。',
    mininum: '最少1.0000 EOS',
    usdtLower: 'Bank的USDT库存不足，无法完成兑换。', // 'The Bank\'s USDT inventory is insufficient to complete the conversion.'
    bankUpdata: 'USDD暂停EOS铸币，赎回和交易不受影响。',
  },
  dex: {
    pay: '支付',
    obtain: '获取',
    rate: '兑换比率',
    slipPoint: '滑点保护',
    slipTip: '如果您提交交易后，价格变化超过滑点保护的范围，交易将被撤销。',
    addMarket: '创建市场',
    swapNow: '立即兑换',
    coin: '币种{coin}',
    contract: '合约地址',
    plsContract: '输入合约地址',
    coinName: '币种名称',
    plsCoinName: '输入币种名称',
    coinDecimal: '币种精度',
    plsCoinDecimal: '输入币种精度',
    submit: '创建',
    createFeeTip: '为了维护良好的交易环境，避免因为无成本上币，而导致的垃圾币横生。创建新的交易对，需要消耗1 DFS。',
    // add
    ableGet: '可兑',
    minGet: '至少获取',
    priceSlip: '价格滑点',
    marketNow: '立即做市',
    poolNum: '流动池数量',
    pools: '资金池',
    moreRoute: '多路径兑换',
    TradeSet: '交易设置',
    slipSet: '滑点设置',
    inviter: '邀请人',
    qusTip1: '你的交易将会回滚，如果在确认前有很大的价格变化',
    qusTip2: '根据交易量的多少，成交价与市价的差异',
    qusTip3: '每笔交易的（0.30%）会给到流动性提供者',
    bankFor: 'BANK 兑换',
    bankForTip: '本兑换经过USDD BANK 兑换。0手续费，0滑点，还有挖矿奖励。', // This exchange is made through USDD BANK. 0 poundage, 0 slip point, still have dig mine reward.
    heightSlip: '当前价格滑点过高！请重新输入', // Current price sliding point is too high! Please re-enter
  },
  createMarket: {
    selectHas: '选择已有币种', // Select existing token
    noFees: '* 创建市场无需任何费用', // * There is no cost to create liquidity
  },
  pools: {
    deposit: '存入',
    withdrawal: '取回',
    depositRate: '存入比率',
    poolsNum: '池内数量',
    getToken: '获得凭证数量',
    token: '凭证',
    ableToken: '可用凭证',
    chooseMarket: '选择市场',
    accRate: '您的做市(占比{rate}%)',
    searchMarket: '搜索市场名称',
    myToken: '我的凭证',
  },
  hyk: {
    stock: '分红',
    stock2: '分红池',
    stockPrice: '认购价格',
    stockRate: '认购进度',
    buyCount: '认购金额',
    buyNum: '认购数量',
    bonusAcc: '分红账户',
    totalBonus: '分红总量',
    totalVal: '总估值',
    holdings: 'HYK持有量',
    perBonus: '每万DFS分红',
  },
  bonus: {
    myDividends: '我的红利',
    nextDividends: '下轮分红',
    totalDividends: '分红总量',
    dfsSupply: 'DFS流通量',
    dfsStaked: 'DFS质押总量',
    ofPercent: '占流通总量的 {percent}%',
    claim: '领取',
    ableStake: '可质押',
    inStake: '输入质押数量',
    inRedeem: '输入赎回数量',
    stake: '质押',
    staked: '已质押',
    redeemable: '可赎回',
    redeeming: '赎回中',
    redeemDetail: '赎回详情',
    redeemNum: '赎回数量',
    redeemTime: '赎回时间',
    lastTime: '剩余{day}天{hour}小时',
  },
  mine: {
    pools: '矿池',
    minReward: '领取小于{minReward}的DFS将不会有奖励到账。',
    rewardCut: '奖励的小数点后四位将被截取。',
    rewardPrice: '未领取的DFS奖励受到DFS当前币价涨跌影响，可能增多或减少。',
    minAbleReward: '领取注意事项', // Minimum recoverable
    mineBuff: '挖矿算力加成',
    buff: '算力加成',
    joinNow: '立即加入',
    join: '加入',
    earnings: '收益', // earnings
    poolsMine1: '当前交易对可以进行流动性挖矿。',
    poolsMine2: '预估每万EOS每天收益 {perDayReward} DFS。',
    poolsMine3: '存入资金，可自动开始挖矿。',
    lockFunds: '锁定资金', // Locked in funds
    wRewaed: '每万{coin}/24H',
    nextLess: '下次产量衰减',
    current: '已经产出',
    waitClaim: '待领取收益',
    claimAll: '一键领取',
    poolsList: '矿池列表',
    myMine: '我的挖矿',
    symbolPool: '{symbol} 矿池',
    accPools: '您的做市',
    minersList: '矿工列表',
    poolsNum: '做市数量',
    mineBonus: '挖矿收益', // Mining earnings
    totalMiners: '总矿工',
    mineApr: '预估挖矿年化收益',
    marketFeesApr: '预估手续费年化收益',
    marketApr24H: '最近24H手续费年化',
  },
  node: {
    nodeSet: '节点设置',
    defaultNode: '默认节点',
    standbyNode: '备用节点',
    slef: '自定义节点',
  },
  footer: {
    swapNum: '兑换量',
    orderNum: '笔订单',
    marketsFee: '池子概况',
    token: '代币',
    mineDfsNum: '累计挖矿产出DFS',
    label: '说明',
    num: '数值',
    total: '总计',
    circulation: '流通',
    dsr: 'DSR',
    apr: '年化',
    tlv: '流动池总量',
    mineApr: '挖矿年化',
    marketApr: '做市年化',
    yfcApr: 'YFC年化',
  },
  dsr: {
    ableInve: '可用库存', // Available inventory
    claimPerDay: '每天可领取', // Available every day
    myDeposit: '我的存款', // My deposit
    whoDeposit: '{acc}的存款', 
    percent: '存款占比', // % Of deposits
    deposit: '存款', // deposit
    retrieve: '取回', // retrieve
    unOpen: 'DSR合约正在审核中，等待正式开放。',
    testData: '页面数据均为测试数据。预估开放日九月八。可能提前或延迟。',
    dfsHolders: 'DFS 家人', // DFS Holders
    total: '总数', // Total
    totalNum: '总存款',
    nowApy: '实时年化',
    allInve: '总库存',
    poolBal: '分配池余额',
    endDate: '到期时间',
    depositTime: '存款时间',
    abtApy: '预计年化收益',
    anyTime: '随存随取',
    oneMonth: '1月',
    threeMonth: '3月',
    sixMonth: '6月',
    oneYear: '1年',
    depositView: '存款预览',
    depositNum: '存款数量',
    allDeposit: '已有存款',
    value: '总计',
    abtEndDate: '预计到期时间',
    warmTip1: '确认存款后，您的DFS将于',
    warmTip2: '解锁，期间无法取回存款！请谨慎操作！',
    depositBal: '存款余额',
  },
  market: {
    capital: '做市本金',
    anthorOne: '请重新发起一笔做市操作',
    rightNow: '立即操作',
    marketReward: '做市盈亏',
    has: '含{coin}',
    manage: '管理',
    myMarkets: '我的做市',
    marketTime: '做市时长',
    timer: '{days}天{hours}时{mins}分{secs}秒',
    pl: '盈亏',
    marketTip: '做市本金数据可能延迟1 - 3分钟，请稍后查看。', //The market-making principal data may be delayed by 1-3 minutes, please check later.
  },
  info: {
    info: '概览',
    top10: '大丰收农场TOP10',
    dfsMineApr: 'DFS挖矿年化',
    markerFeesApr: '做市手续费年化',
    yfcApr: 'YFC钓鱼年化',
    totalApr: '总年化',
  },
  apy: {
    title: '预估24H年化',
    dmdApy: 'DMD挖矿年化',
    dbcApy: 'DBC偷菜年化',
    exchange24: '24H兑换量',
  },
  miningRules: {
    rules: '挖矿规则',
    tradeRules: '交易挖矿规则',
    tradeRule1: '在Swap中参与兑换代币, 即可获得DFS。交易额越大。获得DFS越多。',
    tradeRule2: 'DFS奖励实时到账。',
    bankRules: '铸币挖矿规则',
    bankRule1: '在Bank中参与铸币USDD，即可获得DFS。铸币越多。获得DFS越多。',
    marketRules: '做市挖矿规则',
    marketRule1: '参与指定的交易对的做市。即可参与挖矿。做市资金越大，获得DFS越多。',
    marketRule2: '做市挖矿奖励的领取方式有3',
    marketRule2_1: '用户主动领取。',
    marketRule2_2: '添加做市资金时自动领取。',
    marketRule2_3: '减少做市资金时自动领取。',
  },
  tutorial: {
    done: '搞定！',
    title1: '如何发行USDD',
    label1: '向智能合约发送抵押物EOS，立即得到新发行的USDD。',
    ul1_1: '进入金库页面',
    ul1_2: '输入抵押物数量',
    ul1_3: '点击「生成USDD」按钮',
    ul1_4: '确认交易',
    ul1_5: '等待交易被网络确认',

    title2: '如何赎回抵押物',
    label2: '向智能合约发送USDD，立即赎回对应的抵押物EOS。',
    ul2_1: '进入金库页面',
    ul2_2: '在下方生成记录中选择要赎回的记录',
    ul2_3: '点击「赎回」按钮, 请确保你的钱包中有足够的USDD余额',

    title3: '如何交易',
    label3: '想进行快速的币币交易，把USDD换成EOS，或把EOS换成USDD吗？',
    ul3_1: '进入兑换页面',
    ul3_2: '选择要兑换的币种',
    ul3_3: '输入要兑换的数量',
    ul3_4: '点击「立即兑换」按钮',

    title4: '如何创建交易所',
    label4: '如果兑换中，没有想要的交易所，您可以随时创建一个。',
    ul4_1: '进入兑换页面',
    ul4_2: '点击创建市场',
    ul4_3: '按要求输入币种信息',
    ul4_4: '点击「创建」按钮',

    title5: '如何添加流动性资金',
    ul5_1: '进入做市页面',
    ul5_2: '选择「存入」页签',
    ul5_3: '选择币种',
    ul5_4: '输入两个币种的金额',
    ul5_5: '点击「存入」按钮',

    title6: '如何提取流动性资金',
    ul6_1: '进入做市页面',
    ul6_2: '选择「取回」页签',
    ul6_3: '选择币种',
    ul6_4: '输入凭证数量',
    ul6_5: '点击「取回」按钮',
  },
  dsrRules: {
    title: '存款规则',
    rule1: '存款时，可以选择存款时间，目前有以下五档可供选择',
    rule2_1: '随存随取，年化 {apy}%',
    rule2_2: '1月，年化 {apy}%',
    rule2_3: '3月，年化 {apy}%',
    rule2_4: '6月，年化 {apy}%',
    rule2_5: '1年，年化 {apy}%',
    sptTip: '*注：已有存款时只能选择同期或者更长的存款时间，且到期时间以最后一次存款时间计算。',
  }
}