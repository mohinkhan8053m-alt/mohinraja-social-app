// PriceHelper.js - मोइन राजा का ग्लोबल फाइनेंस इंजन (चारों कैटेगरी सुरक्षित)

// --- कैटेगरी 1: पैकेज और करेंसी कॉन्फ़िगरेशन ---
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

// --- कैटेगरी 2: कॉइन और गिफ्टिंग के लिए 30% कमीशन ---
export const calculateCommission = (totalValue) => {
  const platformShare = totalValue * 0.30; // 30% मोइन राजा का
  const userShare = totalValue * 0.70;    // 70% यूजर का
  return {
    platformShare: Math.round(platformShare), 
    userShare: Math.round(userShare)
  };
};

// --- कैटेगरी 3: स्ट्राइप के लिए ग्लोबल करेंसी कन्वर्जन ---
export const getLocalizedPrice = (countryCode, basePriceUSD) => {
  const countryFactors = {
    'IN': { currency: 'inr', factor: 84 },
    'US': { currency: 'usd', factor: 1 },
    'KW': { currency: 'kwd', factor: 0.31 },
    'GB': { currency: 'gbp', factor: 0.79 },
    'AE': { currency: 'aed', factor: 3.67 },
    'SA': { currency: 'sar', factor: 3.75 }
  };
  const config = countryFactors[countryCode] || countryFactors['IN'];
  const localizedPrice = Math.round(basePriceUSD * config.factor);
  return { amount: localizedPrice, currency: config.currency, displayPrice: `${localizedPrice} ${config.currency.toUpperCase()}` };
};

// --- कैटेगरी 4: बिग टिकट और ग्लोबल प्राइसिंग (मोटी रकम वाला कोड) ---
export const getGlobalPricing = (countryCode, scope, category) => {
  // बड़ी रकम की कैटेगरी (50k से 20L तक)
  const basePrices = { 
    'starter': 5000, 
    'startup': 50000, 
    'enterprise': 1000000,
    'vip_big': 2000000 
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
    currency: config.currency
  };
};
export const getPriceData = (countryCode, category, scope) => {
  return getGlobalPricing(countryCode, scope, category);
};
