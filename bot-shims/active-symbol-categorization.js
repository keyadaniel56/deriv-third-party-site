// active-symbol-categorization shim
export const activeSymbolCategorizationService = {
    categorize: () => Promise.resolve([]),
    getCategories: () => [],
};
export const categorizeActiveSymbols = (symbols) => symbols || [];
export const processActiveSymbols = (symbols) => symbols || [];
