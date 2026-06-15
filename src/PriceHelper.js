export const getPriceData = (countryCode, category, scope) => {
  const basePrices = { 'starter': 5000, 'startup': 50000, 'enterprise': 1000000 };
  
  const countryConfig = {
    'IN': { symbol: '₹', mult: 1, cur: 'inr' },
    'US': { symbol: '$', mult: 5, cur: 'usd' },
    'UK': { symbol: '£', mult: 6, cur: 'gbp' },
    'AE': { symbol: 'DH', mult: 5, cur: 'aed' },
    'KW': { symbol: 'KD', mult: 8, cur: 'kwd' },
    'default': { symbol: '$', mult: 5, cur: 'usd' }
  };

  const config = countryConfig[countryCode] || countryConfig['default'];
  
  // 1. बेस प्राइस निकालें
  let finalPrice = (basePrices[category] || 5000) * config.mult;

  // 2. पूरी दुनिया वाला लॉजिक (Global System)
  if (scope === 'global') {
    // यहाँ '5' एक ग्लोबल इंडेक्स है जो हर देश की करेंसी को बैलेंस करता है
    // इससे किसी भी देश का यूजर हो, उसे एक वाजिब 'Global' रेट दिखेगा
    finalPrice = (basePrices[category] || 5000) * 5; 
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
