export const getPriceData = (countryCode, category, scope) => {
  const basePrices = { 'starter': 5000, 'startup': 50000, 'enterprise': 1000000 };
  
  const safeCategory = basePrices[category] ? category : 'starter';
  
  const countryConfig = {
    'IN': { symbol: '₹', mult: 1, cur: 'inr' },
    'US': { symbol: '$', mult: 5, cur: 'usd' },
    'UK': { symbol: '£', mult: 6, cur: 'gbp' },
    'AE': { symbol: 'DH', mult: 5, cur: 'aed' },
    'KW': { symbol: 'KD', mult: 8, cur: 'kwd' },
    'default': { symbol: '$', mult: 5, cur: 'usd' }
  };

  const config = countryConfig[countryCode] || countryConfig['default'];
  
  let finalPrice = basePrices[safeCategory] * config.mult;

  if (scope === 'global') {
    finalPrice = basePrices[safeCategory] * 5; 
  }

  if (isNaN(finalPrice)) finalPrice = 0;

  return {
    symbol: config.symbol,
    displayPrice: `${config.symbol}${finalPrice.toLocaleString()}`,
    value: finalPrice,
    currency: config.cur,
    category: safeCategory,
    scope: scope
  };
};

// यह लाइन जोड़ते ही आपका एरर खत्म हो जाएगा!
export const getGlobalPricing = getPriceData;
