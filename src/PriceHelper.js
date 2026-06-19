// PriceHelper.js - मोइन राजा का फाइनल ग्लोबल फाइनेंस इंजन

// 1. पैकेज और करेंसी (एग्ज़िस्टिंग)
export const getPackageDetails = (countryCode) => {
  const countryConfig = {
    'KW': { currency: 'KWD', small: 7.5, large: 21, rate: 60 },
    'AE': { currency: 'AED', small: 90, large: 250, rate: 60 },
    'US': { currency: 'USD', small: 19.99, large: 54.99, rate: 50 },
    'SA': { currency: 'SAR', small: 75, large: 205, rate: 50 },
    'SG': { currency: 'SGD', small: 13, large: 40, rate: 30 },
    'IN': { currency: 'INR', small: 299, large: 899, rate: 20 }
  };
  return countryConfig[countryCode] || countryConfig['IN'];
};

// 2. कमीशन (एग्ज़िस्टिंग)
export const calculateCommission = (totalValue) => ({
  platformShare: parseFloat((totalValue * 0.30).toFixed(2)),
  userShare: parseFloat((totalValue * 0.70).toFixed(2))
});

// 3. ग्लोबल प्राइसिंग इंजन (तुम्हारा वाला ओरिजिनल - नो कॉम्प्रोमाइज!)
export const getGlobalPricing = (countryCode, scope, category) => {
  const basePrices = { 
    'starter': 5000, 'startup': 50000, 
    'enterprise': 1000000, 'vip_big': 2000000 
  };
  const countryConfig = {
    'IN': { symbol: '₹', rate: 1, currency: 'inr' },
    'US': { symbol: '$', rate: 0.012, currency: 'usd' },
    'UK': { symbol: '£', rate: 0.009, currency: 'gbp' },
    'KW': { symbol: 'KD', rate: 0.004, currency: 'kwd' }
  };

  const base = basePrices[category] || basePrices['starter'];
  const config = countryConfig[countryCode] || countryConfig['IN'];
  const scopeFactor = (scope === 'global') ? 5 : 1;
  const finalPrice = Math.round(base * (1 / config.rate) * scopeFactor);

  return {
    displayPrice: `${config.symbol} ${finalPrice.toLocaleString()}`,
    value: finalPrice,
    currency: config.currency.toUpperCase()
  };
};

// 4. नया: ऐड-फ्री और बूस्टिंग (तुम्हारे प्राइस के साथ)
export const getServicePricing = (serviceType, countryCode, durationOrTier) => {
  if (serviceType === 'adfree') {
    const isGlobal = countryCode !== 'IN';
    const rate = isGlobal ? 499 : 99;
    return { price: rate * durationOrTier, currency: isGlobal ? 'USD' : 'INR' };
  }
  
  if (serviceType === 'boosting') {
    // यहाँ तुम्हारे बताए हुए मोटे प्राइसेस फिक्स कर दिए हैं
    const tiers = {
      'starter': { price: 5000 },
      'growth': { price: 25000 },
      'enterprise': { price: 100000 }
    };
    return tiers[durationOrTier] || tiers['starter'];
  }
};
