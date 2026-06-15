export const getPriceData = (countryCode, category, scope) => {
  const basePrices = { 'starter': 5000, 'startup': 50000, 'enterprise': 1000000 };
  
  // अगर कैटेगरी या कंट्री कोड गलत है, तो उन्हें सुरक्षित वैल्यू दें
  const safeCategory = basePrices[category] ? category : 'starter';
  
  const countryConfig = {
    'IN': { symbol: '₹', mult: 1, cur: 'inr' },
    'US': { symbol: '$', mult: 5, cur: 'usd' },
    'UK': { symbol: '£', mult: 6, cur: 'gbp' },
    'AE': { symbol: 'DH', mult: 5, cur: 'aed' },
    'KW': { symbol: 'KD', mult: 8, cur: 'kwd' },
    'default': { symbol: '$', mult: 5, cur: 'usd' }
  };

  // अगर countryCode नहीं मिला, तो डिफॉल्ट इस्तेमाल करें
  const config = countryConfig[countryCode] || countryConfig['default'];
  
  // कैलकुलेशन: सुरक्षित तरीके से
  let finalPrice = basePrices[safeCategory] * config.mult;

  // ग्लोबल लॉजिक
  if (scope === 'global') {
    finalPrice = basePrices[safeCategory] * 5; 
  }

  // अगर किसी वजह से फिर भी NaN बने, तो इसे 0 कर दें
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
