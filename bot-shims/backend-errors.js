const error_map = {
    InsufficientBalance: 'Insufficient balance.',
    CustomLimitsReached: 'Custom limits reached.',
    OfferingsValidationError: 'Offerings validation error.',
    InvalidCurrency: 'Invalid currency.',
    ContractBuyValidationError: 'Contract buy validation error.',
    NotDefaultCurrency: 'Not the default currency.',
    PleaseAuthenticate: 'Please authenticate.',
    FinancialAssessmentRequired: 'Financial assessment required.',
    InvalidToken: 'Invalid token.',
    DailyLossLimitExceeded: 'Daily loss limit exceeded.',
    ClientUnwelcome: 'Client unwelcome.',
    PriceMoved: 'Price has moved.',
};

export const getLocalizedErrorMessage = (error, details) => {
    if (typeof error === 'string') return error_map[error] || error;
    if (error && error.code) return error_map[error.code] || error.code;
    return 'Unknown error';
};
