// PriceHelper.js - फाइनल और फिक्स वर्जन
export const getPriceData = (countryCode, category, scope) => {
  // यह फंक्शन का नाम वही है जो तुमने पहले रखा था
  const basePrices = { 
    'starter': 5000, 
    'startup': 50000, 
    'enterprise': 1000000 
  };
  
  const countryConfig = {
    'IN': { symbol: '₹', mult: 1, cur: 'inr' },
    'US': { symbol: '$', mult: 5, cur: 'usd' },
    'UK': { symbol: '£', mult: 6, cur: 'gbp' },
    'AE': { symbol: 'DH', mult: 5, cur: 'aed' },
    'KW': { symbol: 'KD', mult: 8, cur: 'kwd' },
    'default': { symbol: '$', mult: 5, cur: 'usd' }
  };

  const config = countryConfig[countryCode] || countryConfig['default'];
  let finalPrice = basePrices[category] * config.mult;

  if (scope === 'global') {
    finalPrice = finalPrice * 3;
  }

  return {
    symbol: config.symbol,
    displayPrice: `${config.symbol}${finalPrice.toLocaleString()}`,
    value: finalPrice,
    currency: config.cur,
    category: category,
    scope: scope
  };
};

// यह वो फंक्शन है जो तुम्हारी PromotionForm ढूंढ रही है!
export const getGlobalPricing = (originCountry, category, scope) => {
  return getPriceData(originCountry, category, scope);
};
