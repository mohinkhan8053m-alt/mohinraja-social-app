export const getPriceData = (countryCode, category, scope) => {
  // बड़ी कंपनियों के लिए बेस प्राइस
  const basePrices = { 'starter': 5000, 'startup': 50000, 'enterprise': 1000000 };
  
  // सुरक्षित कैटेगरी चेक
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
  
  // कैलकुलेशन लॉजिक
  let finalPrice;
  if (scope === 'global') {
    // ग्लोबल: बेस * 5 (ग्लोबल रीच फीस) * कंट्री मल्टीप्लायर
    finalPrice = basePrices[safeCategory] * 5 * config.mult;
  } else {
    // लोकल: बेस * कंट्री मल्टीप्लायर
    finalPrice = basePrices[safeCategory] * config.mult;
  }

  // अगर वैल्यू गलत है तो 0 सेट करें
  const safePrice = isNaN(finalPrice) ? 0 : finalPrice;

  return {
    symbol: config.symbol,
    displayPrice: `${config.symbol}${safePrice.toLocaleString()}`,
    value: safePrice,
    currency: config.cur,
    category: safeCategory,
    scope: scope
  };
};

// अब ये फाइल पूरी तरह 'स्मार्ट' है!
