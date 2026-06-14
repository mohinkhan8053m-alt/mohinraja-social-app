export const getPriceData = (countryCode, category, scope) => {
  // 1. बेस प्राइस (जो आपकी ओरिजिनल वैल्यूज पर आधारित है)
  const basePrices = { 
    'starter': 5000, 
    'startup': 50000, 
    'enterprise': 1000000 
  };
  
  // 2. कंट्री-वाइज रेट (आपने जो 4 कंट्री दी थी, वो यहाँ हैं + पूरी दुनिया के लिए default)
  const countryConfig = {
    'IN': { symbol: '₹', mult: 1, cur: 'inr' },
    'US': { symbol: '$', mult: 5, cur: 'usd' },
    'UK': { symbol: '£', mult: 6, cur: 'gbp' },
    'AE': { symbol: 'DH', mult: 5, cur: 'aed' },
    'KW': { symbol: 'KD', mult: 8, cur: 'kwd' },
    'default': { symbol: '$', mult: 5, cur: 'usd' }
  };

  const config = countryConfig[countryCode] || countryConfig['default'];
  
  // 3. कैटेगरी का गणित (Base * Country Multiplier)
  let finalPrice = basePrices[category] * config.mult;

  // 4. ग्लोबल स्कोप: (आपने कहा था कि पूरी दुनिया का ऑप्शन होना चाहिए)
  if (scope === 'global') {
    finalPrice = finalPrice * 3;
  }

  return {
    symbol: config.symbol,
    displayPrice: `${config.symbol}${finalPrice.toLocaleString()}`,
    value: finalPrice, // यह Stripe के लिए 'Amount' है
    currency: config.cur, // यह Stripe के लिए 'Currency' कोड है
    category: category,
    scope: scope
  };
};
