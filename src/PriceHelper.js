// PriceHelper.js

export const getGlobalPricing = (countryCode, scope, category) => {
  // 1. कैटेगरी का फिक्स्ड बेस प्राइस (6 कैटेगरी लेवल मैनेज करने के लिए)
  const basePrices = { 
    'starter': 5000, 
    'startup': 50000, 
    'enterprise': 1000000 
  };

  // 2. कंट्री फैक्टर (स्थानीय करेंसी और परचेजिंग पावर के हिसाब से)
  const countryConfig = {
    'IN': { symbol: '₹', rate: 1, currency: 'inr' },    // इंडिया (बेस)
    'US': { symbol: '$', rate: 0.012, currency: 'usd' }, // अमेरिका
    'UK': { symbol: '£', rate: 0.009, currency: 'gbp' }, // यूके
    'KW': { symbol: 'KD', rate: 0.004, currency: 'kwd' }  // कुवैत
  };

  // 3. डिफॉल्ट सेटिंग (अगर कोई कंट्री मैच न हो)
  const base = basePrices[category] || basePrices['starter'];
  const config = countryConfig[countryCode] || countryConfig['IN'];
  
  // 4. ग्लोबल सेटिंग का गणित (अगर ग्लोबल है तो 5x)
  const scopeFactor = (scope === 'global') ? 5 : 1;
  
  // 5. फाइनल कैलकुलेशन
  const finalPrice = Math.round(base * (1 / config.rate) * scopeFactor);

  return {
    displayPrice: `${config.symbol} ${finalPrice.toLocaleString()}`,
    value: finalPrice, // Stripe के लिए काम आएगा
    currency: config.currency
  };
};
