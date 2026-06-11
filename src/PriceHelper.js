// --- 1. ग्लोबल करेंसी और डायनामिक प्राइसिंग ---
export const getCountryPricing = (countryCode) => {
  const basePriceIndia = 999; // Base VIP price in INR
  
  const currencyData = {
    'IN': { curr: 'INR', symbol: '₹', multiplier: 1 }, 
    'US': { curr: 'USD', symbol: '$', multiplier: 3 }, // 3 गुना ज्यादा
    'KW': { curr: 'KWD', symbol: 'KD', multiplier: 3.5 }, // कुवैत: मोटा पैसा
    'AE': { curr: 'AED', symbol: 'DH', multiplier: 3 }, // दुबई
    'UK': { curr: 'GBP', symbol: '£', multiplier: 3 }
  };

  const data = currencyData[countryCode] || currencyData['IN'];
  return {
    ...data,
    vipPrice: Math.round(basePriceIndia * data.multiplier) 
  };
};

// --- 2. 5 नए फीचर्स के साथ हैंडलर ---
export const handleGlobalFeature = (feature, countryCode) => {
  const price = getCountryPricing(countryCode);
  
  const features = {
    'VIP': `/pay?amount=${price.vipPrice}&curr=${price.curr}`,
    'Boosting': `/boost-post?country=${countryCode}`,
    'GeoTarget': `/global-ads?target=${countryCode}`,
    'Affiliate': `/join-affiliate`,
    'SkillMarket': `/marketplace`
  };

  // पेमेंट गेटवे पर भेजें
  if(features[feature]) window.location.href = features[feature];
};
