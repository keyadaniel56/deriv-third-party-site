// common-data shim — provides constants used by block definitions and API services
export const MARKET_OPTIONS = [];
export const SUBMARKET_OPTIONS = [];
export const SYMBOL_OPTIONS = [];
export const TRADE_TYPES = ['CALL', 'PUT', 'DIGIT', 'TICK', 'ASIAN', 'RANGE', 'UPDOWN', 'MULTUP', 'MULTDOWN'];
export const TRADE_TYPE_CATEGORIES = { callput: ['CALL', 'PUT'], digits: ['DIGIT'], asians: ['ASIAN'] };
export const CONTRACT_TYPE_LIST = [];
export const CURRENCY_OPTIONS = ['USD', 'EUR', 'GBP', 'AUD'];
export const DURATION_UNIT_LIST = [
    { display: 'Ticks', value: 't' },
    { display: 'Minutes', value: 'm' },
    { display: 'Hours', value: 'h' },
    { display: 'Days', value: 'd' },
];
export const DURATIONS = [
    { unit: 't', min: 1, max: 10 },
    { unit: 'm', min: 1, max: 525600 },
    { unit: 'h', min: 1, max: 8760 },
    { unit: 'd', min: 1, max: 365 },
];
export const CANDLE_INTERVALS = [
    { display: '1 minute', value: '60' },
    { display: '5 minutes', value: '300' },
];
export const TRADING_TIMES = {};
export const getTradingTimes = (date, market) => Promise.resolve({});
export const getAccountLimits = () => Promise.resolve({ max_stake: 10000, max_payout: 100000 });
export const getContractTypeOptions = () => [];
export const getMarketBySymbol = () => null;
export const getSubmarketBySymbol = () => null;
