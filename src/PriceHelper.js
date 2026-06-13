// --- PriceHelper.js (सिर्फ कैलकुलेशन के लिए) ---

export const getGlobalPricing = (originCountry) => {
  // आपका फिक्स प्रीमियम टारगेट - कोई कॉम्प्रोमाइज नहीं
  const PRICE_INDIA = 1000000;   // ₹10,00,000 फिक्स
  const PRICE_FOREIGN = 2000000; // ₹20,00,000 की वैल्यू (फॉरेन करेंसी में)

  // अगर इंडिया का क्लाइंट है
  if (originCountry === 'IN') {
    return { 
      symbol: '₹', 
      displayPrice: '₹10,00,000', 
      value: PRICE_INDIA 
    };
  }

  // अगर फॉरेन का क्लाइंट है - उनकी करेंसी में ₹20 लाख की सटीक वैल्यू
  const foreignRates = {
    'US': { symbol: '$', val: '24,000' }, // 20 Lakhs in USD
    'UK': { symbol: '£', val: '19,000' }, // 20 Lakhs in GBP
    'AE': { symbol: 'DH', val: '88,000' }, // 20 Lakhs in AED
    'KW': { symbol: 'KD', val: '7,300' }  // 20 Lakhs in KWD
  };

  const data = foreignRates[originCountry] || { symbol: '$', val: '24,000' };

  return {
    symbol: data.symbol,
    displayPrice: `${data.symbol}${data.val}`,
    value: PRICE_FOREIGN
  };
};
