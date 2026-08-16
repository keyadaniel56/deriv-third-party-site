export const findValueByKeyRecursively = () => undefined;
export const formatTime = (t) => {
    if (!t) return '0s';
    const s = Math.floor(Number(t));
    if (s < 60) return s + 's';
    return Math.floor(s / 60) + 'm ' + (s % 60) + 's';
};
export const getRoundedNumber = (n, d) => {
    const f = Math.pow(10, d || 2);
    return Math.round(Number(n) * f) / f;
};
export const isEmptyObject = (o) => !o || typeof o !== 'object' || !Object.keys(o).length;
export const isMultiplierContract = (ct) => /MULT/i.test(ct);
export const getCurrencyDisplayCode = (c) => c || 'USD';
export const getDecimalPlaces = () => 2;
export const getContractTypeOptions = () => [];
export const getFormattedText = (s) => String(s);
export const sequence = (arr) => arr.reduce((p, fn) => p.then(fn), Promise.resolve());
export const getSocketURL = () => Promise.resolve('wss://api.derivws.com/websockets/v3?app_id=1089');
export const compareXml = () => false;
